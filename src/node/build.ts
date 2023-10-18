import path from 'path'
import { pathToFileURL } from 'url'
import { build as viteBuild } from 'vite'
import fs from 'fs-extra'
// import ora from 'ora'
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constant'
import type { InlineConfig } from 'vite'
import type { RollupOutput } from 'rollup'
import type { SiteConfig } from 'shared/types'
import { createVitePlugins } from './vitePlugins'

// const spinner = ora()

export async function build(root: string = process.cwd(), config: SiteConfig) {
  // 1. bundle client 端 + server 端
  const [clientBundle] = await bundle(root, config)
  // 2. 引入 server-entry 模块
  const serverEntryPath = pathToFileURL(
    path.resolve(root, './.temp/ssr-entry.cjs') // TODO: 统一化打包后缀
  ).toString()
  const { render } = await import(serverEntryPath)
  // 3. 服务端渲染，产出HTML
  await renderPage(root, render, clientBundle)
}
export async function renderPage(
  root: string,
  render: () => string,
  clientBundle: RollupOutput
) {
  const appHtml = render()
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry
  )

  console.log(`Rendering page in server side...`)

  const html = `\
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
  // ensure build dir
  await fs.ensureDir(path.resolve(root, 'build'))
  // write html file
  await fs.writeFile(path.resolve(root, './build/index.html'), html)
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

function resolveBuildConfig({
  isSSR,
  root,
  config,
}: {
  isSSR: boolean
  root: string
  config: SiteConfig
}): InlineConfig {
  return {
    mode: 'production',
    root,
    plugins: createVitePlugins(config),
    ssr: {
      // 注意加上这个配置，防止 cjs 产物中 require ESM 的产物，因为 react-router-dom 的产物为 ESM 格式
      noExternal: ['react-router-dom'], // 加入编译
    },
    build: {
      ssr: isSSR,
      outDir: isSSR ? '.temp' : 'build',
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
  return viteBuild(resolveBuildConfig({ isSSR: false, root, config }))
}

async function buildServer(root: string, config: SiteConfig) {
  return viteBuild(resolveBuildConfig({ isSSR: true, root, config }))
}
