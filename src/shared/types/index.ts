import type { UserConfig as ViteUserConfig } from 'vite'

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

type NavItemWithLink = {
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
type SidebarItem = {
  text: string
  link: string
}
