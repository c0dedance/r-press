import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element, Root } from 'hast'

export const rehypePluginPreWrapper: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // <pre><code>...</code></pre>
      // 1. 找到 pre 元素
      if (node.tagName === 'pre' && node.children.length) {
        const codeNode = node.children[0] as Element
        if (!(codeNode.type === 'element' && codeNode.tagName === 'code')) {
          return
        }
        // 2. 解析出代码的语言
        const className = codeNode.properties?.className?.[0]
        const lang = className?.replace(/^language-/, '') || ''

        const spanNode: Element = {
          type: 'element',
          tagName: 'span',
          properties: {
            className: 'lang', // 自定义class
          },
          children: [
            {
              type: 'text',
              value: lang,
            },
          ],
        }
        // 3. 变换 Html AST
        const divNode: Element = {
          type: 'element',
          tagName: 'div',
          properties: { className },
          children: [spanNode, node],
        }
        // replace
        parent.children[index] = divNode
      }
    })
  }
}
