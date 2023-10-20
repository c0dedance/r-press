import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import shiki from 'shiki'
import { rehypePluginPreWrapper } from '../plugin-mdx/rehypePlugins/preWrapper'
import { THEME, rehypePluginShiki } from '../plugin-mdx/rehypePlugins/shiki'

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
})
