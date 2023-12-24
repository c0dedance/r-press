import { defineConfig } from 'r-press'

export default defineConfig({
  title: 'RPress',
  description: 'RPress Playground',
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/getting-started" },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            {
              text: '快速开始',
              link: '/guide/getting-started'
            },
            {
              text: '配置站点',
              link: '/guide/configure-site'
            }
          ]
        },
        {
          text: '架构',
          items: [
            {
              text: 'SPA 和 MPA 对比',
              link: '/guide/spa-vs-mpa'
            },
            {
              text: '孤岛架构',
              link: '/guide/islands-arch'
            }
          ]
        },
        {
          text: '基础功能',
          items: [
            {
              text: '约定式路由',
              link: '/guide/conventional-route'
            },
            {
              text: '使用 MDX 语法',
              link: '/guide/use-mdx'
            },
            {
              text: '静态资源',
              link: '/guide/static-assets'
            },
          ]
        },
      ]
    }
  },
  aiConfig: {
    // root: '.',
    include: ['./**/*.{md,mdx}'],
    server: {
      ask: '/ask',
      upload: '/upload',
    },
  }
})
