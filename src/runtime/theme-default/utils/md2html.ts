import MarkdownIt from 'markdown-it'
import MarkdownItHighlightjs from 'markdown-it-highlightjs'

export const markdownToHtml = (content: string): string => {
  const markdown = new MarkdownIt().use(MarkdownItHighlightjs)

  try {
    const html = markdown.render(content)
    return html
  } catch (err) {
    return content
  }
}
