import path from 'path'

export const ROOT = path.resolve(__dirname, '../')

export const DEFAULT_HTML_PATH = path.resolve(ROOT, 'template.html')

export const CLIENT_ENTRY_PATH = path.resolve(
  ROOT,
  './src/runtime/client-entry.tsx'
)

export const PUBLIC_DIR = 'public'

export const PRE_BUNDLE_DIR = 'vendors'

export const CLIENT_OUTPUT = 'build' // docs下打包的目录

export const SERVER_ENTRY_PATH = path.resolve(
  ROOT,
  './src/runtime/ssr-entry.tsx'
)

export const MD_REGEX = /\.mdx?$/

export const MASK_SPLITTER = '!!ISLAND!!' // ISLAND组件标识的分隔符

// 预打包的依赖
export const EXTERNALS = [
  'react',
  'react-dom',
  'react-dom/client',
  'react/jsx-runtime',
]
