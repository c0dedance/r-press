import path from 'path'
import glob from 'fast-glob'
import { normalizePath } from 'vite'

interface RouteMeta {
  routePath: string
  absolutePath: string
}

export class RouteService {
  #scanDir: string
  #routeMeta: RouteMeta[] = []
  constructor(scanDir: string) {
    this.#scanDir = scanDir
  }

  async init() {
    // 1.扫描目录
    const files = glob
      .sync(['**/*.{js,jsx,ts,tsx,md,mdx}'], {
        cwd: this.#scanDir,
        absolute: true,
        ignore: ['**/node_modules/**', '**/build/**', 'rpress.config.ts'],
      })
      .sort() // 保证文件顺序一致

    // 2.生成RouteMeta[]
    const routes = files.map((file) => {
      const relativePath = path.relative(this.#scanDir, file)
      const routePath = this.normalizeRoutePath(normalizePath(relativePath))
      return {
        routePath,
        absolutePath: file,
      }
    })
    this.#routeMeta = routes
  }
  generateRoutes(): string {
    // RouteMeta[] -> module string
    return `\
import React from 'react'
${this.#routeMeta
  .map((item, index) => `import Route${index} from '${item.absolutePath}';`)
  .join('\n')}
export const routes = [
  ${this.#routeMeta
    .map(
      (item, index) =>
        `{ "path": '${item.routePath}', "element": React.createElement(Route${index})},`
    )
    .join('\n')}
  ]
`
  }
  getRouteMeta() {
    return this.#routeMeta
  }
  normalizeRoutePath(path: string) {
    const cleanPath = path.replace(/\..*$/g, '').replace(/\/index$/g, '')
    return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`
  }
}
