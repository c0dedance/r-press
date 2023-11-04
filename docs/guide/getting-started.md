# 快速开始

## 为什么选择 Rpress?

🏝️ Rpress 是一个基于 Vite、React 和 MDX 的静态站点生成器。它的特点是**简单**、**强大**且**高性能**，旨在帮助你以最少的配置专注于编写和部署静态站点。它主要具有以下功能：

- **开发体验好**: 基于 Vite 进行构建，启动和热更新速度极快。
- **语法灵活**: 内置 MDX 支持，也就是说你可以在 Markdown 中使用 React 组件。
- **高性能**: 基于[孤岛架构](https://jasonformat.com/islands-architecture/), 实现了 Partial Hydration，意味着更少的客户端 JavaScript 和更少的运行时开销。
- **功能强大**: 默认主题内置了`夜间模式`、`Home 主页`等等能力。

接下来，我们将从零开始搭建一个基于 Rpress 的文档站点。


## 1. 初始化项目

Rpress 有如下两种安装方式，你只需要选择一种即可。~~我们推荐使用 `create-rpress` 脚手架，因为它可以帮助你快速简单地安装 Rpress 并搭建网站框架。~~

### 使用 `create-rpress` 脚手架

敬请期待...

### 手动安装

1. 创建并进入一个新目录

     ~~~bash
   $ mkdir rpress-docs && cd rpress-docs
   ~~~


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
    
5. 在 `package.json` 中添加一些`scripts`

   这一步骤是可选的，推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。

   ```json
   {
     "scripts": {
       "dev": "r-press dev docs",
       "build": "r-press build docs",
       "preview": "r-press preview docs",
     }
   }
   ```


## 2. 启动 Dev Server

通过如下命令启动本地开发服务:

```bash
$ pnpm dev
```

这样 Rpress 将在 http://localhost:5173 启动开发服务。

~~如果你使用了 `create-rpress` 脚手架创建项目，那么你就能看到一个带有导航栏以及内容的页面（像这个文档一样）。~~

如果你选择了手动创建项目，那么你将会看到页面上打印的 `Hello Rpress`。这表示你已经成功地启动了 Rpress 的开发服务。

## 3. 生产环境构建

通过如下命令构建生产环境的产物:

```bash
$ pnpm build
```

默认情况下，Rpress 将会把产物打包到 `docs/build` 目录。

## 4. 本地预览产物

通过如下命令启动本地预览服务:

```bash
$ pnpm preview
```

这样 Rpress 将在 http://localhost:5173 启动预览服务。
