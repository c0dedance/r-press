import assert from 'assert'
import { MD_REGEX } from '../constant'
import type { Plugin } from 'vite'

export function pluginMdxHMR(): Plugin {
  let viteReactPlugin: Plugin
  return {
    name: 'vite-plugin-mdx-hmr',
    apply: 'serve',
    configResolved(config) {
      viteReactPlugin = config.plugins.find(
        (plugin) => plugin.name === 'vite:react-babel'
      ) as Plugin
    },
    async transform(code, id, opts) {
      if (MD_REGEX.test(id)) {
        // Inject babel refresh template code by @vitejs/plugin-react
        assert(typeof viteReactPlugin.transform === 'function')

        const result = await viteReactPlugin.transform?.call(
          this,
          code,
          id + '?.jsx', // 他只识别jsx文件才会注入refresh逻辑 hack to make vite:react-babel transform mdx file
          opts
        )
        const selfAcceptCode = '\n;import.meta.hot.accept();'
        // 如果代码不包含import.meta.hot.accept()的逻辑，则手动注入调用
        if (
          typeof result === 'object' &&
          !result!.code?.includes(selfAcceptCode)
        ) {
          result!.code += selfAcceptCode
        }
        return result
      }
    },
  }
}
