// import { unified } from 'unified'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import rehypeStringify from 'rehype-stringify'

// import shiki from 'shiki'
// import {
//   rehypePluginPreWrapper,
//   THEME,
//   rehypePluginShiki,
// } from '../../../node/plugin-mdx'

// const processor = unified()
//   .use(remarkParse)
//   .use(remarkRehype)
//   .use(rehypePluginPreWrapper)
//   .use(rehypePluginShiki, {
//     highlighter: await shiki.getHighlighter({ theme: THEME }),
//   })
//   .use(rehypeStringify)
// export const md2html = async (mdContent: string) => {
//   const result = processor.processSync(mdContent)
//   return result.value
// }

import MarkdownIt from 'markdown-it'
import MarkdownItHighlightjs from 'markdown-it-highlightjs'

// markdown processor
export const markdownToHtml = (content: string): string => {
  const markdown = new MarkdownIt().use(MarkdownItHighlightjs)

  try {
    const html = markdown.render(content)
    return html
  } catch (err) {
    return content
  }
}
