import { declare } from '@babel/helper-plugin-utils'
import { types as t } from '@babel/core'
import { normalizePath } from 'vite'
import { MASK_SPLITTER } from './constant'

import type { Visitor } from '@babel/traverse'
import type { PluginPass } from '@babel/core'

export default declare((api) => {
  api.assertVersion(7)

  const visitor: Visitor<PluginPass> = {
    // 核心逻辑实现
    JSXOpeningElement(path, state) {
      const { node, scope } = path
      const component = node.name
      // 组件名字，如 <Aside />: Aside; <Side.Aside />: Side;
      let bindingName = ''
      if (component.type === 'JSXIdentifier') {
        bindingName = component.name
      } else if (component.type === 'JSXMemberExpression') {
        let object = component.object
        // A.B.C
        while (t.isJSXMemberExpression(object)) {
          object = object.object
        }
        // 取出 A
        bindingName = object.name
      } else {
        // 其它 type 忽略，不处理
        return
      }

      // 根据作用域信息拿到组件引入的位置
      const binding = scope.getBinding(bindingName)

      if (binding?.path.parent.type === 'ImportDeclaration') {
        // 定位到 import 语句之后，我们拿到 Island 组件对应的引入路径
        const source = binding.path.parent.source
        // 然后将 __island prop 进行修改

        const islandAttr = node.attributes.find(
          (attr) => attr.name.name === '__island'
        )
        if (!islandAttr) return
        // normalizePath 在各个os保持路径一致
        islandAttr.value = t.stringLiteral(
          `${source.value}${MASK_SPLITTER}${normalizePath(
            state.filename || ''
          )}`
        )
      }
    },
  }
  return {
    name: 'transform-jsx-island',
    visitor,
  }
})
