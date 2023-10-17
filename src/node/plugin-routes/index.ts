import { Plugin } from 'vite'
import { RouteService } from './RouteService'

interface PluginOptions {
  root: string
}

const CONVENTIONAL_ROUTE_ID = 'rpress:routes'

// 本质: 把文件目录结构 -> 路由数据
export function pluginRoutes(options: PluginOptions): Plugin {
  const routeService = new RouteService(options.root)

  return {
    name: 'rpress:routes',
    async configResolved() {
      // Vite 启动时，对 RouteService 进行初始化
      await routeService.init()
    },
    resolveId(id: string) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return '\0' + CONVENTIONAL_ROUTE_ID
      }
    },
    load(id: string) {
      if (id === '\0' + CONVENTIONAL_ROUTE_ID) {
        const a = routeService.generateRoutes()
        console.log('generateRoutes', a)
        return a
      }
    },
  }
}
