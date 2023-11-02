import path from 'path'
import pluginReact from '@vitejs/plugin-react'
import pluginUnocss from 'unocss/vite'
import { pluginIndexHtml } from './plugin-r-press/indexHtml'
import { pluginConfig } from './plugin-r-press/config'
import { pluginRoutes } from './plugin-routes'
import { createPluginMdx } from './plugin-mdx'
import { pluginTransformIslands } from './plugin-island/transform'
import unocssOptions from './unocssOptions'
import { ROOT } from './constant'

import type { SiteConfig } from 'shared/types'

export async function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR: boolean = false
) {
  return [
    pluginUnocss(unocssOptions),
    pluginIndexHtml(),
    pluginTransformIslands(),
    pluginReact({
      jsxRuntime: 'automatic',
      jsxImportSource: isSSR ? path.join(ROOT, 'src', 'runtime') : 'react',
      // babel: {
      //   plugins: [babelPluginIsland],
      // },
    }),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
    }),
    await createPluginMdx(),
  ]
}
