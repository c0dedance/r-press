import { Plugin } from 'vite'

const SITE_DATA_ID = 'rpress:site-data'

export function pluginSiteData(config): Plugin {
  return {
    name: 'r-press:site-data',
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
  }
}
