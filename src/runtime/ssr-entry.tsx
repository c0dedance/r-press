import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App, { initPageData } from './App'
import { DataContext } from './hooks'

export interface RenderResult {
  appHtml: string
  propsData: unknown[]
  islandPathToMap: Record<string, string>
}

// For ssr component render
export async function render(pagePath: string) {
  // 生产 pageData
  const pageData = await initPageData(pagePath)
  // 清除 islands 数据
  const { clearIslandData, data } = await import('./jsx-runtime')
  const { islandProps, islandPathToMap } = data
  clearIslandData()

  const appHtml = renderToString(
    <DataContext.Provider value={pageData}>
      <StaticRouter location={pagePath}>
        <App />
      </StaticRouter>
    </DataContext.Provider>
  )
  return {
    appHtml,
    islandProps,
    islandPathToMap,
  }
}

export { routes } from 'rpress:routes'
