# 配置站点

## 创建配置文件

如果你使用 脚手架 创建项目，那么你将得到下面的模板目录结构:  

```bash
.
├── docs
│   ├── article
│   │   ├── getting-started.md
│   │   └── islands-arch.md
│   ├── public
│   │   └── logo.png
│   ├── rpress.config.ts
│   └── index.md
├── package.json
├── pnpm-lock.yaml
└── README.md
```

模板中已经包含了配置文件了，即 `docs/rpress.config.ts` 。因此，你也就不需要手动创建配置文件了。你可以跳过这一小节剩下的内容。

如果你选择手动初始化项目，在没有任何配置的情况，页面是非常简陋的，没有导航，也没有侧边栏。但是，通过 `rpress.config.ts` 文件，你可以配置并自定义站点的各种信息。

例如，在上一小节你手动创建的初始化项目中，你可以添加配置文件，项目结构如下：

```bash
.
├─ docs
│  ├─ rpress.config.ts
│  └─ index.md
└─ package.json
```

你可以尝试在 `config.ts` 中添加以下配置代码:

```ts
import { defineConfig } from 'r-press'

export default defineConfig({
  title: 'my-site'
});
```


另外，关于配置文件有以下两个注意事项:

- 1. Rpress 支持 `.js`、`.ts` 文件作为配置文件。但是推荐使用 TypeScript 配置，因为可以使用`defineConfig` 获取类型提示。

- 2. 配置文件应该有一个默认导出，即默认导出一个 `SiteConfig` 对象。

在上面的例子中，我们将站点的 `title` 设置为 `my-site`，然后你可以通过 `pnpm dev` 运行启动开发服务器。你会看到站点的标题已更改为 `my-site`。这意味着你已经唤醒了你的第一个站点配置，nice!

在下一节中，我们将介绍导航和侧边栏配置，这对于文档站点是相当重要的。

## 导航栏配置

`nav` 字段用来配置导航栏, 举个 🌰:

```ts
import { defineConfig } from 'r-press'

export default defineConfig({
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      }
    ]
  }
});
```

## 侧边栏配置

`sidebar` 字段可以用来配置侧边栏，举个 🌰:

```ts
import { defineConfig } from 'islandjs';

export default defineConfig({
  themeConfig: {
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/getting-started'
            }
          ]
        }
      ]
    }
  }
});
```

对于以上的配置选项，脚手架模板中已经有了一些默认的配置，你可以直接使用。但同时，你也可以根据自己的需求进行修改，使其满足你的需求。