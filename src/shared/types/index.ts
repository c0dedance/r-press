import type { UserConfig as ViteUserConfig } from 'vite'
import type { ComponentType } from 'react'

export interface PageModule {
  default: ComponentType
  frontmatter?: FrontMatter
  toc?: Header[]
  [key: string]: unknown
}

// 用户配置的超集
export interface SiteConfig {
  root: string
  configPath: string
  configDeps: string[]
  siteData: UserConfig
}

export interface UserConfig {
  title?: string
  description?: string
  themeConfig?: ThemeConfig
  vite?: ViteUserConfig
}

// 主题配置：导航栏 侧边栏
export interface ThemeConfig {
  nav?: NavItemWithLink[]
  sidebar?: Sidebar
  footer?: Footer
}

export type NavItemWithLink = {
  text: string
  link: string
}
export interface Sidebar {
  [path: string]: SidebarGroup[]
}
export interface Footer {
  message: string
}

export interface SidebarGroup {
  text: string
  items: SidebarItem[]
}

export type SidebarItem = {
  text: string
  link: string
}
/* page */
export type PageType = 'home' | 'doc' | 'custom' | '404'

export interface Header {
  id: string
  text: string
  depth: number
}
// 页面元信息
export interface FrontMatter {
  title?: string
  description?: string
  pageType?: PageType
  sidebar?: boolean
  outline?: boolean
  // 增加 features 和 hero 的类型
  features?: Feature[]
  hero?: Hero
}

export interface PageData {
  siteData: UserConfig
  pagePath: string
  frontmatter: FrontMatter
  pageType: PageType
  toc?: Header[]
}

export interface Feature {
  icon: string
  title: string
  details: string
}

export interface Hero {
  name: string
  text: string
  tagline: string
  image?: {
    src: string
    alt: string
  }
  actions: {
    text: string
    link: string
    theme: 'brand' | 'alt'
  }[]
}
