import { createServer as createViteDevServer } from 'vite'
import pluginReact from '@vitejs/plugin-react'
import { pluginIndexHtml } from './plugin-r-press/indexHtml'
import { ROOT } from './constant'
import { pluginConfig } from './plugin-r-press/config'
import { resolveConfig } from './config'
import { pluginRoutes } from './plugin-routes'

export async function createDevServer(
  root: string = process.cwd(),
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, 'serve', 'development')

  return createViteDevServer({
    root: ROOT,
    plugins: [
      pluginIndexHtml(),
      pluginReact(),
      pluginConfig(config, restartServer),
      pluginRoutes({
        root: config.root,
      }),
    ],
    server: {
      fs: {
        // 允许为项目根目录的上一级提供服务
        allow: [ROOT],
      },
    },
  })
}
