/// <reference types="vite/client" />

declare module 'rpress:site-data' {
  import type { UserConfig } from 'shared/types'
  const siteData: UserConfig
  export default siteData
}
declare module 'rpress:routes' {
  import type { Route } from 'node/plugin-routes'
  const routes: Route[]
  export { routes }
}
