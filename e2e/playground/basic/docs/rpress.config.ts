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
          text: '介绍',
          items: [
            {
              text: '快速开始',
              link: '/guide/start'
            },
            {
              text: '配置站点',
              link: '/guide/usage'
            }
          ]
        }
      ]
    }
  },
})
