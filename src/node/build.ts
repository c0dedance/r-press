import path from 'path'
import { pathToFileURL } from 'url';
import { build as viteBuild } from 'vite'
import fs from "fs-extra";
// import ora from 'ora'
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constant'
import type { InlineConfig } from 'vite'
import type { RollupOutput } from 'rollup'

// const spinner = ora()

export async function build(root: string = process.cwd()) {
  // 1. bundle client 端 + server 端
  const [clientBundle, serverBundle] = await bundle(root);
  // 2. 引入 server-entry 模块
  const serverEntryPath = pathToFileURL(path.resolve(root, './.temp/ssr-entry.js')).toString()
  const { render } = await import(serverEntryPath)
  // 3. 服务端渲染，产出HTML
  await renderPage(root, render, clientBundle)
}
export async function renderPage(
  root: string,
  render: () => string,
  clientBundle: RollupOutput,
) {
  const appHtml = render();
  const clientChunk = clientBundle.output.find((chunk) => chunk.type === 'chunk' && chunk.isEntry);

  console.log(`Rendering page in server side...`);

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
</html>`.trim();
  // ensure build dir
  await fs.ensureDir(path.resolve(root, "build"));
  // write html file
  await fs.writeFile(path.resolve(root, './build/index.html'), html);
  // remove .temp
  await fs.remove(path.resolve(root, './.temp'));
}

export async function bundle(root: string) {
  // spinner.start('Building client + server bundles...')
  console.log(`Building client + server bundles...`);
  try {
    const [clientBundle, serverBundle] = await Promise.all([
      // client build
      buildClient(root),
      // server build
      buildServer(root),
    ]);
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (e) {
    console.log(e);
  }
}

function resolveBuildConfig({ isSSR, root }: { isSSR: boolean, root: string }): InlineConfig {
  return {
    mode: 'production',
    root,
    build: {
      ssr: isSSR,
      outDir: isSSR ? '.temp' : 'build',
      rollupOptions: {
        input: isSSR ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isSSR ? 'cjs' : 'esm'
        }
      }
    }
  }
}

async function buildClient(root: string) {
  return viteBuild(resolveBuildConfig({ isSSR: false, root }))
}

async function buildServer(root: string) {
  return viteBuild(resolveBuildConfig({ isSSR: true, root }))
}
