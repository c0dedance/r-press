import { cac } from 'cac'
import { build } from './build'
import { version } from '../../package.json'

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
    // await resolveConfig(root, 'build', 'production')
    await build(root)
  })

cli.parse()
