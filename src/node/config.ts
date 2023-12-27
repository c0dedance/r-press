import path from 'path'
import fs from 'fs-extra'
import { loadConfigFromFile } from 'vite'
import type { SiteConfig, UserConfig, AiConfig } from '../shared/types'

type RawUserConfig =
  | UserConfig
  | Promise<UserConfig>
  | (() => UserConfig | Promise<UserConfig>)

export async function resolveConfig(
  root: string,
  command: 'serve' | 'build',
  mode: 'development' | 'production'
): Promise<SiteConfig> {
  const [configPath, userConfig, userConfigDeps] = await resolveUserConfig(
    root,
    command,
    mode
  )
  const siteConfig: SiteConfig = {
    root,
    configPath: configPath,
    configDeps: userConfigDeps,
    siteData: resolveSiteData(userConfig as UserConfig),
  }
  return siteConfig
}

export async function resolveUserConfig(
  root: string,
  command: 'serve' | 'build',
  mode: 'development' | 'production'
) {
  // 1. 获取配置路径 支持js 和 ts 格式
  const configPath = getUserConfigPath(root)
  // 2.解析配置文件
  const { config: rawConfig = {} as RawUserConfig, dependencies = [] } =
    (await loadConfigFromFile(
      {
        command,
        mode,
      },
      configPath,
      root
    )) || {}
  if (rawConfig) {
    const config =
      typeof rawConfig === 'function' ? await rawConfig() : rawConfig
    return [configPath, config, dependencies] as const
  }
  return [configPath, {} as UserConfig, dependencies] as const
}

export function resolveSiteData(userConfig: UserConfig): UserConfig {
  return {
    title: userConfig.title || 'Rpress.js',
    description: userConfig.description || 'SSG Framework',
    themeConfig: userConfig.themeConfig || {},
    vite: userConfig.vite || {},
    aiConfig: userConfig.aiConfig || ({} as AiConfig),
  }
}

function getUserConfigPath(root: string) {
  const configFileNames = ['rpress.config.ts', 'rpress.config.js']
  try {
    const configPath = configFileNames
      .map((name) => path.resolve(root, name))
      .find(fs.pathExistsSync)
    return configPath
  } catch (e) {
    console.error('Failed to load config file.', e)
    throw e
  }
}
export function defineConfig(config: UserConfig): UserConfig {
  return config
}
