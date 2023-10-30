import path from 'path'
import { pathToFileURL } from 'url'
import { build as viteBuild } from 'vite'
import fs from 'fs-extra'
// import ora from 'ora'
import {
  CLIENT_ENTRY_PATH,
  CLIENT_OUTPUT,
  EXTERNALS,
  MASK_SPLITTER,
  PUBLIC_DIR,
  ROOT,
  SERVER_ENTRY_PATH,
} from './constant'
import { createVitePlugins } from './vitePlugins'
import type { InlineConfig } from 'vite'
import type { RollupOutput } from 'rollup'
import type { HelmetData, HelmetServerState } from 'react-helmet-async'
import type { SiteConfig } from 'shared/types'
import type { Route } from './plugin-routes'
import type { RenderResult } from 'runtime/ssr-entry'

// const spinner = ora()
export async function build(root: string = process.cwd(), config: SiteConfig) {
  // 1. bundle client 端 + server 端
  const [clientBundle] = await bundle(root, config)
  // 2. 引入 server-entry 模块
  const serverEntryPath = pathToFileURL(
    path.resolve(root, './.temp/ssr-entry.js') // TODO: 统一化打包后缀
  ).toString()
  const { render, routes } = await import(serverEntryPath)
  // 3. 服务端渲染，产出HTML
  await renderPage({ root, render, clientBundle, routes })
}
/* 生产HTML */
export async function renderPage({
  root,
  render,
  clientBundle,
  routes,
}: {
  root: string
  render: (pagePath: string, helmetContext: object) => Promise<RenderResult>
  clientBundle: RollupOutput
  routes: Route[]
}) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry
  )
  const styleAssets = clientBundle.output.filter(
    (chunk) => chunk.type === 'asset' && chunk.fileName.endsWith('.css')
  )
  const renderIndexHTML = (
    appHtml: string,
    islandsCode: string,
    islandProps: unknown[],
    helmet: HelmetServerState
  ) =>
    `\
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      ${helmet?.title?.toString() || ''}
      ${helmet?.meta?.toString() || ''}
      ${helmet?.link?.toString() || ''}
      ${helmet?.style?.toString() || ''}
      <meta name="description" content="none">
      ${styleAssets
        .map((item) => `<link rel="stylesheet" href="/${item.fileName}">`)
        .join('\n')}
      <script type="importmap">
      {
        "imports": {
          ${EXTERNALS.map(
            (name) => `"${name}": "/${normalizeVendorFilename(name)}"`
          ).join(',\n')}
        }
      }
      </script>
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script type="module">${islandsCode}</script>
      <script type="module" src="/${clientChunk?.fileName}"></script>
      <script id="island-props">${JSON.stringify(islandProps)}</script>
    </body>
  </html>`.trim()
  console.log(`Rendering page in server side...`)
  await Promise.all(
    [
      ...routes,
      {
        path: '/404', // 生成 404.html
      },
    ].map(async (r) => {
      const helmetContext = {
        context: {},
      } as HelmetData
      // 渲染路由对应的页面
      const {
        appHtml,
        islandPathToMap,
        islandProps = [],
      } = await render(r.path, helmetContext.context)
      const { helmet } = helmetContext.context

      // 打包 Islands 组件代码
      const islandBundle = await buildIslands(root, islandPathToMap)
      const islandsCode = (islandBundle as RollupOutput).output[0].code

      // 组件HTML嵌入到模板中
      const html = renderIndexHTML(appHtml, islandsCode, islandProps, helmet)
      // htlm文件名处理
      const outputFilePath = r.path.endsWith('/')
        ? `${r.path}index.html`
        : `${r.path}.html`

      const outputPath = path.join(root, CLIENT_OUTPUT, outputFilePath)
      // ensure build dir
      await fs.ensureDir(path.dirname(outputPath))
      // write html file
      await fs.writeFile(outputPath, html)
    })
  )

  // remove .temp
  await fs.remove(path.resolve(root, './.temp'))
}
/* 打包 islands 组件 */
async function buildIslands(
  root: string,
  islandPathToMap: RenderResult['islandPathToMap']
) {
  /* 拼接的目标代码 
  import { Aside } from 'some-path'
  // 全局注册 Islands 组件
  window.ISLANDS = { Aside }
  // 注册 Islands 组件的 props 数据
  window.ISLAND_PROPS = JSON.parse(
    document.getElementById('island-props').textContent
  )
  */
  const islandsInjectCode = `\
  ${Object.entries(islandPathToMap)
    .map(
      ([islandName, islandPath]) =>
        `import { ${islandName} } from '${islandPath}';`
    )
    .join('\n')}

    window.ISLANDS = { ${Object.keys(islandPathToMap).join(', ')} };
    window.ISLAND_PROPS = JSON.parse(
      document.getElementById('island-props').textContent
    );
  `
  const injectId = 'island:inject'
  return viteBuild({
    build: {
      outDir: path.join(root, '.temp'),
      rollupOptions: {
        input: injectId,
        external: EXTERNALS,
      },
    },
    plugins: [
      {
        name: 'island:inject',
        enforce: 'post', // 作为兜底的处理逻辑
        resolveId(id) {
          // './components/Aside!!ISLAND!!/path/to/src/runtime/theme-default/Layout/DocLayout/index.tsx'
          if (id.includes(MASK_SPLITTER)) {
            const [originId, importer] = id.split(MASK_SPLITTER)
            return this.resolve(originId, importer, { skipSelf: true }) // skipSelf=true表明忽略当前插件，让其他插件处理
          }
          if (id === injectId) {
            return '\0' + id
          }
        },
        // 处理虚拟模块 island:inject
        load(id) {
          if (id === '\0' + injectId) {
            return islandsInjectCode
          }
        },
        // 对于 Islands Bundle，我们只需要 JS 即可，其它资源文件可以删除
        generateBundle(_, bundle) {
          for (const name in bundle) {
            if (bundle[name].type === 'asset') {
              delete bundle[name]
            }
          }
        },
      },
    ],
  })
}
/* 打包 SSR Client */
export async function bundle(root: string, config: SiteConfig) {
  // spinner.start('Building client + server bundles...')
  console.log(`Building client + server bundles...`)
  try {
    const [clientBundle, serverBundle] = await Promise.all([
      // client build
      buildClient(root, config),
      // server build
      buildServer(root, config),
    ])
    // copy publicDir assets
    const publicDir = path.join(root, PUBLIC_DIR)
    if (fs.pathExistsSync(publicDir)) {
      await fs.copy(publicDir, path.join(root, CLIENT_OUTPUT))
    }
    // 依赖预打包产物复制到 build 目录
    await fs.copy(path.join(ROOT, 'vendors'), path.join(root, CLIENT_OUTPUT))

    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput]
  } catch (e) {
    console.log(e)
  }
}

async function resolveBuildConfig({
  isSSR,
  root,
  config,
}: {
  isSSR: boolean
  root: string
  config: SiteConfig
}): Promise<InlineConfig> {
  return {
    mode: 'production',
    root,
    plugins: await createVitePlugins(config, null, isSSR),
    ssr: {
      // 注意加上这个配置，防止 cjs 产物中 require ESM 的产物，因为 react-router-dom 的产物为 ESM 格式
      noExternal: ['react-router-dom', 'lodash-es'], // 加入编译
    },
    build: {
      ssr: isSSR,
      outDir: isSSR ? path.join(root, '.temp') : path.join(root, CLIENT_OUTPUT),
      rollupOptions: {
        input: isSSR ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isSSR ? 'cjs' : 'esm',
        },
        external: EXTERNALS,
      },
    },
  }
}

async function buildClient(root: string, config: SiteConfig) {
  return viteBuild(await resolveBuildConfig({ isSSR: false, root, config }))
}

async function buildServer(root: string, config: SiteConfig) {
  return viteBuild(await resolveBuildConfig({ isSSR: true, root, config }))
}
/* 将文件路径转为下划线分割 */
function normalizeVendorFilename(fileName: string) {
  return fileName.replace(/\//g, '_') + '.js'
}
