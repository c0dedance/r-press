import pluginMdx from '@mdx-js/rollup'
import remarkPluginGFM from 'remark-gfm'
import rehypePluginAutolinkHeadings from 'rehype-autolink-headings'
import rehypePluginSlug from 'rehype-slug'
import remarkPluginMDXFrontMatter from 'remark-mdx-frontmatter'
import remarkPluginFrontmatter from 'remark-frontmatter'
import shiki from 'shiki'
import { rehypePluginPreWrapper } from './rehypePlugins/preWrapper'
import { THEME, rehypePluginShiki } from './rehypePlugins/shiki'
import { remarkPluginToc } from './remarkPlugins/toc'

import type { Plugin } from 'vite'

export async function pluginMdxRollup(): Promise<Plugin> {
  return pluginMdx({
    remarkPlugins: [
      remarkPluginGFM,
      remarkPluginFrontmatter,
      [remarkPluginMDXFrontMatter, { name: 'frontmatter' }],
      remarkPluginToc,
    ],
    rehypePlugins: [
      rehypePluginSlug,
      [
        rehypePluginAutolinkHeadings,
        {
          properties: {
            class: 'header-anchor',
          },
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
      rehypePluginPreWrapper,
      [
        rehypePluginShiki,
        {
          highlighter: await shiki.getHighlighter({ theme: THEME }),
        },
      ],
    ],
  }) as unknown as Plugin
}
