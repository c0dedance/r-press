import { pluginMdxRollup } from './pluginMdxRollup'
import type { Plugin } from 'vite'

export function createPluginMdx(): Plugin[] {
  return [pluginMdxRollup()]
}
