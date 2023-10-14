import path from 'path'
import fs from 'fs-extra'
import execa from 'execa'

const ROOT_PATH = path.resolve(__dirname, '../')
const DIST_PATH = path.resolve(__dirname, '../dist')
const EXAMPLE_PATH = path.resolve(__dirname, '../e2e/playground/basic')

const defaultOptions = {
  stdout: process.stdout,
  stdin: process.stdin,
  stderr: process.stderr,
}

async function prepareE2E() {
  // 判断是否有进行过构建
  if (!fs.existsSync(DIST_PATH)) {
    execa.commandSync('pnpm build', {
      cwd: ROOT_PATH,
      ...defaultOptions,
    })
  }
  // init playwright
  execa.commandSync('npx playwright install', {
    cwd: ROOT_PATH,
    ...defaultOptions,
  })
  // runn example project
  execa.commandSync('pnpm dev', {
    cwd: EXAMPLE_PATH,
    ...defaultOptions,
  })
}

prepareE2E()
