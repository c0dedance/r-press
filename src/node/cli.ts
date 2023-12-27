import path from 'path'
import { loadEnv } from 'vite'
import { cac } from 'cac'
import { build } from './build'
import { preview } from './preview'
import { upload } from './upload'
import { version } from '../../package.json'
import { resolveConfig } from './config'

const cli = cac('r-press').version(version).help()

cli
  .command('[root]', 'start dev server')
  .alias('dev')
  .action(async (root: string) => {
    const createServer = async () => {
      const { createDevServer } = await import('./dev')
      const restartServer = async () => {
        await server.close()
        await createServer()
      }
      const server = await createDevServer(root, restartServer)

      await server.listen()
      server.printUrls()
    }

    await createServer()
  })

cli
  .command('build [root]', 'build for production')
  .action(async (root: string) => {
    root = path.resolve(root)
    const config = await resolveConfig(root, 'build', 'production')
    await build(root, config)
  })

cli
  .command('preview [root]', 'preview production build')
  .option('--port <port>', 'port to use for preview server')
  .action(async (root: string, { port }: { port: number }) => {
    try {
      root = path.resolve(root)
      await preview(root, { port })
    } catch (e) {
      console.log(e)
    }
  })

cli
  .command(
    'upload [root]',
    'upload docs to backend and generate the knowledge base.'
  )
  // .option('-t, --token <token>', 'access token')
  // .option('-b, --backend <backend>', 'upload url')
  // .option('-i, --include <include>', 'include docs')
  // .option('-e, --exclude <exclude>', 'exclude docs')
  .action(async (root: string) => {
    try {
      root = path.resolve(root)
      const config = await resolveConfig(root, 'build', 'production')
      // load env
      const { VITE_ACCESS_TOKEN: accessToken } = loadEnv(
        'production',
        process.cwd()
      )

      await upload({
        root,
        accessToken,
        ...config.siteData.aiConfig,
      })
    } catch (e) {
      console.log(e)
    }
  })

cli.parse()
