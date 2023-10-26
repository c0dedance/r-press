import path from 'path'
import { pathToFileURL } from 'url'
import { build as viteBuild } from 'vite'
import fs from 'fs-extra'
// import ora from 'ora'
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constant'
import { createVitePlugins } from './vitePlugins'
import type { InlineConfig } from 'vite'
import type { RollupOutput } from 'rollup'
import type { SiteConfig } from 'shared/types'
import type { Route } from './plugin-routes'

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
export async function renderPage({
  root,
  render,
  clientBundle,
  routes,
}: {
  root: string
  render: (pagePath: string) => string
  clientBundle: RollupOutput
  routes: Route[]
}) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry
  )
  const renderIndexHTML = (appHtml: string) =>
    `\
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>title</title>
      <meta name="description" content="xxx">
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script type="module" src="/${clientChunk?.fileName}"></script>
    </body>
  </html>`.trim()
  console.log(`Rendering page in server side...`)
  await Promise.all(
    routes.map(async (r) => {
      // 渲染路由对应的页面
      const appHtml = await render(r.path)
      // 组件HTML嵌入到模板中
      const html = renderIndexHTML(appHtml)
      // htlm文件名处理
      const outputFilePath = r.path.endsWith('/')
        ? `${r.path}index.html`
        : `${r.path}.html`

      const outputPath = path.join(root, 'build', outputFilePath)
      // ensure build dir
      await fs.ensureDir(path.dirname(outputPath))
      // write html file
      await fs.writeFile(outputPath, html)
    })
  )

  // remove .temp
  await fs.remove(path.resolve(root, './.temp'))
}

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
      outDir: isSSR ? path.join(root, '.temp') : path.join(root, 'build'),
      rollupOptions: {
        input: isSSR ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isSSR ? 'cjs' : 'esm',
        },
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
