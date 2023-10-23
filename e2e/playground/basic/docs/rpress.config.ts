import { defineConfig } from 'r-press/dist'
export default defineConfig({
  title: 'RPress',
  description: 'RPress Playground',
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
    ],
  },
})
