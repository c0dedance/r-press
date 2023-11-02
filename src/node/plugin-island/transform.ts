import { TransformOptions, transformAsync } from '@babel/core'
import babelPluginIsland from '../babel-plugin-island'
import type { Plugin } from 'vite'

const ISLAND_FILE_REGEX = (name) => name.endsWith('x') // island组件可能存在的文件.jsx | .tsx | .mdx
const ISLAND_CODE_REGEX = /(?<= )__island/

export function pluginTransformIslands(): Plugin {
  return {
    name: 'vite-plugin-transform-islands',
    apply: 'build',
    enforce: 'pre', // 需要最先处理一次
    async transform(code, id) {
      if (ISLAND_FILE_REGEX(id) && ISLAND_CODE_REGEX.test(code)) {
        const res = await transformIslands(code, id)
        return res
      }
    },
  }
}

async function transformIslands(
  code: string,
  filename: string
): Promise<string> {
  const babelOptions: TransformOptions = {
    filename,
    presets: ['@babel/preset-typescript'],
    plugins: [babelPluginIsland],
  }
  return transformAsync(code, babelOptions)
}
