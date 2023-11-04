# Rpress 🌱

Rpress，一个基于 Vite 和孤岛架构的 SSG 静态站点框架

## Features ✨

- **Vite: 极速的开发响应速度** 🚀
  - 基于 Vite 构建，开发时的响应速度极快，即时的热更新，带给你极致的开发体验。
- **MDX: Markdown & React 组件来写内容** 📦
  - MDX 是一种强大的方式来写内容。你可以在 Markdown 中使用 React 组件。
- **孤岛架构: 更高的生产性能** ✨
  - 采用 Islands 架构，意味着更少的 JavaScript 代码、局部 hydration， 从而带来更好的首屏性能。
- **TypeScript: 优秀的类型支持** 🔑
  - 使用 TypeScript 编写，提供了优秀的类型支持，让你的开发更加顺畅。

## Installation 📦

```bash
$ pnpm i r-press
```

## Usage 🚀

### 手动安装

1. 创建并进入一个新目录

   ```bash
   $ mkdir rpress-docs && cd rpress-docs
   ```

2. 使用包管理器进行初始化

   ```bash
   $ pnpm init
   ```

3. 安装依赖

   ```bash
   $ pnpm i r-press
   ```

4. 创建你的第一篇文档
   ```bash
   $ mkdir docs && echo '# Hello Rpress' > docs/index.md
   ```
5. 在 `package.json` 中添加一些`scripts`

   这一步骤是可选的，推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。

   ```json
   {
     "scripts": {
       "dev": "r-press dev docs",
       "build": "r-press build docs",
       "preview": "r-press preview docs"
     }
   }
   ```

6. 在本地启动服务器 or 打包

   ```bash
   $ pnpm dev

   $ pnpm build && pnpm preview
   ```

### 使用 create-press 脚手架

敬请期待...

## Documentation 📚

To check out docs, visit [docs](https://Rpress.qkeep.cn).

## Changelog 📝

Detailed changes for each release are documented in the [CHANGELOG](https://github.com/c0dedance/r-press/blob/master/CHANGELOG.md).

## Credits 🎉

Inspired by [island.js](https://github.com/sanyuan0704/island.js). Respect!

## License 📄

[MIT](./LICENSE) License © 2023 [c0dedance](https://github.com/c0dedance/)
