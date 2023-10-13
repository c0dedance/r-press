import { cac } from 'cac'
import { createDevServer } from './dev'
import { build } from './build'

import { version } from '../../package.json'

const cli = cac('r-press').version(version).help()

cli
  .command('[root]', 'start dev server')
  .alias('dev')
  .action(async (root: string) => {
    const server = await createDevServer(root)
    await server.listen()
    server.printUrls()
  })

cli
  .command('build [root]', 'build for production')
  .action(async (root: string) => {
    await build(root)
  })

cli.parse()
