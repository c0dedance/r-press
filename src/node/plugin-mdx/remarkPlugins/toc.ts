import Slugger from 'github-slugger'
import { visit } from 'unist-util-visit'
import { Root } from 'mdast'
import { parse } from 'acorn'
import type { Plugin } from 'unified'
import type { MdxjsEsm, Program } from 'mdast-util-mdxjs-esm'

interface TocItem {
  id: string
  text: string
  depth: number
}
interface ChildNode {
  type: 'link' | 'text' | 'inlineCode'
  value: string
  children?: ChildNode[]
}
export const remarkPluginToc: Plugin<[], Root> = () => {
  return (tree) => {
    // 初始化 toc 数组
    const toc: TocItem[] = []
    let title = ''
    // 同一个slugger实例具有记忆，重复处理的标题后续的会带上后缀，每次编译时都重新进行实例的初始化
    const slugger = new Slugger()
    // 遍历 tree
    visit(tree, 'heading', (node) => {
      if (!node.depth || !node.children) return
      // 收集 h1 作为 doc.title
      if (node.depth === 1) {
        title = (node.children[0] as ChildNode).value
      }
      // 收集 h2~h4 的标题
      if (node.depth > 1 && node.depth < 5) {
        const text = (node.children as ChildNode[])
          .map((n) => {
            // case: link内容解析
            switch (n.type) {
              case 'link':
                return n.children?.map((c) => c.value).join('') || ''
              default:
                return n.value
            }
          })
          .join('')
        // id 通过 slugger 生成规范化的标题id
        const id = slugger.slug(text)
        const item: TocItem = {
          id,
          text,
          depth: node.depth,
        }
        toc.push(item)
      }
    })
    // 插入 toc
    const insertCode = `export const toc = ${JSON.stringify(toc, null, 2)}`
    tree.children.unshift({
      type: 'mdxjsEsm',
      value: insertCode,
      // 附加ast信息
      data: {
        estree: parse(insertCode, {
          ecmaVersion: 2020,
          sourceType: 'module',
        }) as unknown as Program,
      },
    } as MdxjsEsm)
    // 插入 h1
    if (title) {
      const insertedTitle = `export const title = '${title}';`

      tree.children.unshift({
        type: 'mdxjsEsm',
        value: insertedTitle,
        data: {
          estree: parse(insertedTitle, {
            ecmaVersion: 2020,
            sourceType: 'module',
          }) as unknown as Program,
        },
      } as MdxjsEsm)
    }
  }
}
