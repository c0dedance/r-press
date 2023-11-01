import path from 'path'
import fs from 'fs-extra'
import { build } from 'esbuild'
import resolve from 'resolve'
import { normalizePath } from 'vite'
import { EXTERNALS, PRE_BUNDLE_DIR } from '../src/node/constant'

async function preBundle(deps: string[]) {
  const flattenDepMap = {} as Record<string, string>
  deps.forEach((dep) => {
    const flattedName = dep.replace(/\//g, '_')
    flattenDepMap[flattedName] = dep
  })
  const outputAbsolutePath = path.join(process.cwd(), PRE_BUNDLE_DIR)

  if (await fs.pathExists(outputAbsolutePath)) {
    await fs.remove(outputAbsolutePath)
  }

  // 调用 Esbuild 进行打包
  await build({
    entryPoints: flattenDepMap,
    outdir: PRE_BUNDLE_DIR,
    bundle: true,
    minify: true,
    splitting: true,
    format: 'esm',
    platform: 'browser',
    plugins: [
      {
        name: 'pre-bundle',
        setup(build) {
          // bare import
          build.onResolve({ filter: /^[\w@][^:]/ }, async (args) => {
            if (!deps.includes(args.path)) {
              return
            }
            const isEntry = !args.importer
            const resolved = resolve.sync(args.path, {
              basedir: args.importer || process.cwd(),
            })
            return isEntry
              ? { path: resolved, namespace: 'dep' }
              : { path: resolved }
          })
          build.onLoad({ filter: /.*/, namespace: 'dep' }, async (args) => {
            const entryPath = normalizePath(args.path)
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const res = require(entryPath)
            // 拿出所有的具名导出
            const specifiers = Object.keys(res)
            // 导出 ESM 格式的入口代码
            return {
              contents: `export { ${specifiers.join(
                ','
              )} } from "${entryPath}"; export default require("${entryPath}")`,
              loader: 'js',
              resolveDir: process.cwd(),
            }
          })
        },
      },
    ],
  })
}

preBundle(EXTERNALS)
