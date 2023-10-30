import path from 'path'
import compression from 'compression'
import polka from 'polka'
import fs from 'fs-extra'
import sirv from 'sirv'
// import { resolveConfig } from './config'

const DEFAULT_PORT = 4173

export async function preview(root: string, { port }: { port?: number }) {
  // const config = await resolveConfig(root, 'serve', 'production')
  const listenPort = port ?? DEFAULT_PORT
  const outputDir = path.resolve(root, 'build')
  const notFoundPage = fs.readFileSync(
    path.resolve(outputDir, '404.html'),
    'utf-8'
  )
  // 资源压缩服务
  const compress = compression()

  // 静态资源服务
  const serve = sirv(outputDir, {
    // 开启强缓存
    etag: true,
    maxAge: 31536000,
    immutable: true,
    setHeaders(res, pathname) {
      if (pathname.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache') // 仅对html开启协商缓存
      }
    },
  })

  const onNoMatch: polka.Options['onNoMatch'] = (req, res) => {
    res.statusCode = 404
    res.end(notFoundPage)
  }

  polka({ onNoMatch })
    .use(compress, serve)
    .listen(listenPort, (err) => {
      if (err) {
        throw err
      }
      console.log(
        `> Preview server is running at http://localhost:${listenPort}`
      )
    })
}
