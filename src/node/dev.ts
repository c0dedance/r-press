import { createServer as createViteDevServer } from 'vite'
import pluginReact from '@vitejs/plugin-react'
import { pluginIndexHtml } from './plugin-r-press/indexHtml'
import { ROOT } from './constant'

export function createDevServer(root: string = process.cwd()) {
  return createViteDevServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact()],
    server: {
      fs: {
        // 允许为项目根目录的上一级提供服务
        allow: [ROOT],
      },
    },
  })
}
