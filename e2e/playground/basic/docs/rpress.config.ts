import { defineConfig } from 'r-press/dist'
export default defineConfig({
  title: 'RPress',
  description: 'RPress Playground',
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '教程',
          items: [
            {
              text: '快速上手',
              link: '/guide/start'
            },
            {
              text: '如何使用',
              link: '/guide/usage'
            }
          ]
        }
      ]
    }
  },
})
