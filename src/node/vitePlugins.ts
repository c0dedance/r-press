import pluginReact from '@vitejs/plugin-react'
import { pluginIndexHtml } from './plugin-r-press/indexHtml'
import { pluginConfig } from './plugin-r-press/config'
import { pluginRoutes } from './plugin-routes'
import { createPluginMdx } from './plugin-mdx'
import pluginUnocss from 'unocss/vite'
import unocssOptions from './unocssOptions'
import type { SiteConfig } from 'shared/types'

export async function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>
) {
  return [
    pluginUnocss(unocssOptions),
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: 'automatic',
    }),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
    }),
    await createPluginMdx(),
  ]
}
