import path from 'path'
import { createRequire } from 'module'
import fs from 'fs-extra'
import chalk from 'chalk'
import execa from 'execa'
import semver from 'semver'
import minimist from 'minimist'
import { prompt } from 'enquirer'

/* 
  发布流程编排
  1. 确定变动版本级别 patch | minor | major，遵循 semver 规范
  2. 执行测试
  3. 自动修改包版本
  4. 执行 pnpm build
  5. 生成 CHANGELOG.md
  6. release commit
  7. 执行 npm publish
  8. git push 并打 tag
*/

// 因为 packag.json 声明了 `type: "module"`, 而 esm 环境下没有 require 方法，所以我们使用 createRequire 来声明 require
const require = createRequire(import.meta.url)
// 解析命令行参数
const args = minimist(process.argv.slice(2)) // pnpm release --dry -> --dry
// 是否是 dry 模式。dry 模式下只会展示命令，不会真正执行命令，用来测试。
const isDry = args.dry

console.log(isDry, 'dry')

const versionIncrements = ['patch', 'minor', 'major'] as const

const pkg = require('../package.json')
const currentVersion = pkg.version
// 真正执行
const directRun = (bin: string, args: string[]) => {
  return execa(bin, args, { stdio: 'inherit' })
}
// 假装执行
const dryRun = (bin: string, args: string[]) => {
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`))
}

const run = isDry ? dryRun : directRun

const step = (msg) => console.log(chalk.cyan(msg))

// 更新 package.json 中的 version 字段
function updateVersion(version: string) {
  pkg.version = version
  fs.writeFileSync(
    path.resolve(__dirname, '../package.json'),
    JSON.stringify(pkg, null, 2)
  )
}

async function main() {
  // 1. 确定变动版本级别 `patch | minor | major`，遵循 semver 规范。
  const { release } = await prompt<{ release: string }>({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: versionIncrements.map(
      (type) => `${type} (${semver.inc(currentVersion, type)})`
    ),
  })
  // minor (1.0.1) -> 1.0.1
  const targetVersion = release.match(/\((.*)\)/)![1]
  // 二次确认，方便取消
  const { confirm } = await prompt<{ confirm: boolean }>({
    type: 'confirm',
    name: 'confirm',
    message: `Releasing ${targetVersion}. Confirm?`,
  })

  if (!confirm) {
    return
  }
  // 2. 执行测试
  step('\nRunning tests...')
  await run('pnpm', ['test:unit'])
  // await run('pnpm', ['test:e2e'])

  // 3. 自动修改包版本
  if (!isDry) {
    step('\nUpdate version...')
    updateVersion(targetVersion)
  }

  // 4. 执行 pnpm build
  step('\nBuilding package...')
  await run('pnpm', ['build'])

  // 5. 生成 CHANGELOG.md（后面会补充 changelog 命令）
  step('\nGenerating changelog...')
  await run('pnpm', ['changelog'])

  // 6. 生成 release commit
  step('\nCommitting changes...')
  await run('git', ['add', '-A'])
  await run('git', ['commit', '-m', `release: v${targetVersion}`])

  // 7. 执行 npm publish
  step('\nPublishing packages...')
  await run('pnpm', [
    'publish',
    '--access',
    'public',
    '--registry=https://registry.npmjs.org',
  ]) // –access public 参数则设置包的访问权限为公共。

  // 8. git push 并打 tag
  step('\nPushing to GitHub...')
  await run('git', ['tag', `v${targetVersion}`])
  await run('git', ['push', 'origin', `refs/tags/v${targetVersion}`])
  await run('git', ['push'])
}

main().catch((err) => {
  // 错误兜底处理，回退版本
  console.log(err)
  console.log(
    'use this command to login npm: npm login --registry=https://registry.npmjs.org'
  )
  updateVersion(currentVersion)
})
