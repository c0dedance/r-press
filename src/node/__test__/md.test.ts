import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkMdx from 'remark-mdx'
import remarkStringify from 'remark-stringify'
import rehypeStringify from 'rehype-stringify'

import shiki from 'shiki'
import {
  rehypePluginPreWrapper,
  THEME,
  rehypePluginShiki,
  remarkPluginToc,
} from '../plugin-mdx'

describe('Markdown compile cases', async () => {
  // 初始化 processor
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePluginPreWrapper)
    .use(rehypePluginShiki, {
      highlighter: await shiki.getHighlighter({ theme: THEME }),
    })
    .use(rehypeStringify)

  const remarkProcessor = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkPluginToc)
    .use(remarkStringify)

  test('Compile title', async () => {
    const mdContent = '# 123'
    const result = processor.processSync(mdContent)
    expect(result.value).toMatchInlineSnapshot('"<h1>123</h1>"')
  })

  test('Compile code', async () => {
    const mdContent = 'I am using `Island.js`'
    const result = processor.processSync(mdContent)
    expect(result.value).toMatchInlineSnapshot(
      '"<p>I am using <code>Island.js</code></p>"'
    )
  })

  test('Compile code block', async () => {
    const mdContent = '```js\nconsole.log(123)\n```'
    const result = processor.processSync(mdContent)
    expect(result.value).toMatchInlineSnapshot(`
      "<div class=\\"language-js\\"><span class=\\"lang\\">js</span><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #E5C07B\\">console</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">log</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">123</span><span style=\\"color: #ABB2BF\\">)</span></span>
      <span class=\\"line\\"></span></code></pre></div>"
    `)
  })

  test('Compile TOC', async () => {
    const mdContent = `\
# h1

## h2 \`code\`

### h3 [link](https://islandjs.dev)

#### h4 你好啊

##### h5
`

    const result = remarkProcessor.processSync(mdContent)
    expect(result.value.toString().replace(mdContent, ''))
      .toMatchInlineSnapshot(`
        "export const toc = [
          {
            \\"id\\": \\"h2-code\\",
            \\"text\\": \\"h2 code\\",
            \\"depth\\": 2
          },
          {
            \\"id\\": \\"h3-link\\",
            \\"text\\": \\"h3 link\\",
            \\"depth\\": 3
          },
          {
            \\"id\\": \\"h4-你好啊\\",
            \\"text\\": \\"h4 你好啊\\",
            \\"depth\\": 4
          }
        ]

        "
      `)
  })
})
