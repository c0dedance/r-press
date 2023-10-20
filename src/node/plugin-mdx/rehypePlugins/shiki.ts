/* 代码高亮插件 */
import { visit } from 'unist-util-visit'
import { fromHtml } from 'hast-util-from-html'
import type { Plugin } from 'unified'
import type { Text, Root, Element } from 'hast'
import type { Highlighter } from 'shiki'

interface Options {
  highlighter: Highlighter
}
export const THEME = 'one-dark-pro'

export const rehypePluginShiki: Plugin<[Options], Root> = ({ highlighter }) => {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // 1. 找到 <pre> -> <code>
      if (node.tagName === 'pre' && node.children.length) {
        const codeNode = node.children[0] as Element
        if (!(codeNode.type === 'element' && codeNode.tagName === 'code')) {
          return
        }
        // 2. 解析出代码的语言
        const className = codeNode.properties?.className?.[0]
        const lang = className?.replace(/^language-/, '') || ''
        // 没指定语言无需高亮处理
        if (!lang) {
          return
        }
        const codeContent = (codeNode.children[0] as Text).value
        // 高亮结果
        const highlightedCode = highlighter.codeToHtml(codeContent, { lang })
        // 注意！我们需要将其转换为 AST 然后进行插入
        // { fragment: true } 不生成html body...
        const fragmentAst = fromHtml(highlightedCode, { fragment: true })
        const newNodes = fragmentAst.children as unknown as Element[]
        parent.children.splice(index, 1, ...newNodes)
      }
    })
  }
}
