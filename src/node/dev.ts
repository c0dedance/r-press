import { createServer as createViteDevServer } from 'vite'
import { ROOT } from './constant'
import { resolveConfig } from './config'
import { createVitePlugins } from './vitePlugins'

export async function createDevServer(
  root: string = process.cwd(),
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, 'serve', 'development')

  return createViteDevServer({
    root: ROOT,
    plugins: await createVitePlugins(config, restartServer),
    server: {
      fs: {
        // 允许为项目根目录的上一级提供服务
        allow: [ROOT],
      },
    },
  })
}
