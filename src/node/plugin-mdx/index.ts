import { pluginMdxRollup } from './pluginMdxRollup'
import type { Plugin } from 'vite'

export async function createPluginMdx(): Promise<Plugin[]> {
  return [await pluginMdxRollup()]
}

export * from './rehypePlugins/preWrapper'
export * from './rehypePlugins/shiki'
export * from './remarkPlugins/toc'
