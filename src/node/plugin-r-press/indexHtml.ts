import { readFile } from 'fs/promises'
import { Plugin } from 'vite'
import { CLIENT_ENTRY_PATH, DEFAULT_HTML_PATH } from '../constant'

export function pluginIndexHtml(): Plugin {
  return {
    name: 'r-press:index-html',
    // 不在函数题体直接插入中间件，而是在configureServer中插入？
    // 防止影响vite的逻辑
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          // if (req.url !== '/') {
          //   return next()
          // }
          const htmlContent = await readFile(DEFAULT_HTML_PATH, 'utf-8')
          const html = await server.transformIndexHtml(
            req.url,
            htmlContent,
            req.originalUrl
          )
          try {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(html)
          } catch (e) {
            return next(e)
          }
        })
      }
    },
    // 入口文件自动注入
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: `/@fs/${CLIENT_ENTRY_PATH}`,
            },
            injectTo: 'body',
          },
        ],
      }
    },
  }
}
