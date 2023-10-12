import { build as viteBuild } from 'vite'
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constant'
import type { InlineConfig } from 'vite'
import type { RollupOutput } from 'rollup'

export async function build(root: string = process.cwd()) {
  // 1. bundle client 端 + server 端
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
  // 2. 引入 server-entry 模块
  // 3. 服务端渲染，产出HTML
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
