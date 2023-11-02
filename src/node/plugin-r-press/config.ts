import { relative, join } from 'path'
import fs from 'fs-extra'
import sirv from 'sirv'
import { PUBLIC_DIR, ROOT } from 'node/constant'
import type { SiteConfig } from 'shared/types'
import type { Plugin } from 'vite'

const SITE_DATA_ID = 'rpress:site-data'

export function pluginConfig(
  config: SiteConfig,
  restartServer?: () => Promise<void>
): Plugin {
  return {
    name: 'r-press:site-data',
    config() {
      return {
        root: ROOT,
        resolve: {
          alias: {
            '@runtime': join(ROOT, 'src', 'runtime', 'index.ts'),
          },
        },
        css: {
          modules: {
            localsConvention: 'camelCaseOnly',
          },
        },
        optimizeDeps: {
          include: [
            'react-helmet-async',
            'react-dom',
            'react-dom/client',
            'lodash-es',
          ],
        },
      }
    },
    configureServer(server) {
      const publicDir = join(config.root, PUBLIC_DIR)
      if (fs.pathExistsSync(publicDir)) {
        server.middlewares.use(sirv(publicDir))
      }
    },
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return '\0' + SITE_DATA_ID
      }
    },
    load(id) {
      if (id === '\0' + SITE_DATA_ID) {
        return `
          export default ${JSON.stringify(config.siteData)}
        `
      }
    },
    async handleHotUpdate(ctx) {
      const customWatchedFiles = [config.configPath, ...config.configDeps]
      const include = (id: string) =>
        customWatchedFiles.some((file) => id.includes(file))

      if (include(ctx.file)) {
        console.log(
          `\n${relative(config.root, ctx.file)} changed, restarting server...`
        )
        // 重启 Dev Server
        await restartServer()
      }
    },
  }
}
