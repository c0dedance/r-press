import { createServer as createViteDevServer } from 'vite'
import pluginReact from '@vitejs/plugin-react'
import { pluginIndexHtml } from './plugin-r-press/indexHtml'
import { ROOT } from './constant'
import { pluginSiteData } from './plugin-r-press/siteData'
import { resolveConfig } from './config'

export async function createDevServer(root: string = process.cwd()) {
  const config = await resolveConfig(root, 'serve', 'development')

  return createViteDevServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact(), pluginSiteData(config)],
    server: {
      fs: {
        // 允许为项目根目录的上一级提供服务
        allow: [ROOT],
      },
    },
  })
}
