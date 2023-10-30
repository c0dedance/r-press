import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App, { initPageData } from './App'
import { DataContext } from './hooks'

export interface RenderResult {
  appHtml: string
  islandProps: unknown[]
  islandPathToMap: Record<string, string>
}

// For ssr component render
export async function render(pagePath: string) {
  // 生产 pageData
  const pageData = await initPageData(pagePath)
  // 清除 islands 数据
  const { clearIslandData, data } = await import('./jsx-runtime')
  clearIslandData()

  const appHtml = renderToString(
    <DataContext.Provider value={pageData}>
      <StaticRouter location={pagePath}>
        <App />
      </StaticRouter>
    </DataContext.Provider>
  )
  // 保证每次都能拿到最新的数据
  const { islandProps, islandPathToMap } = data
  return {
    appHtml,
    islandProps,
    islandPathToMap,
  }
}

export { routes } from 'rpress:routes'
