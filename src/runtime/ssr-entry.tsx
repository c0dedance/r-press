import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App, { initPageData } from './App'
import { DataContext } from './hooks'

export interface RenderResult {
  appHtml: string
  islandProps: unknown[]
  islandPathToMap: Record<string, string>
}

// For ssr component render
export async function render(pagePath: string, helmetContext: object) {
  // 生产 pageData
  const pageData = await initPageData(pagePath)
  // 清除 islands 数据
  const { clearIslandData, data } = await import('./jsx-runtime')
  clearIslandData()

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <DataContext.Provider value={pageData}>
        <StaticRouter location={pagePath}>
          <App />
        </StaticRouter>
      </DataContext.Provider>
    </HelmetProvider>
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
