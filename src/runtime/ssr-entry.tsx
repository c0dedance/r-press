import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App, { initPageData } from './App'
import { DataContext } from './hooks'

// For ssr component render
export async function render(pagePath: string) {
  // 生产 pageData
  const pageData = await initPageData(pagePath)
  // 清除 islands 数据
  const { clearIslandData } = await import('./jsx-runtime')
  clearIslandData()

  return renderToString(
    <DataContext.Provider value={pageData}>
      <StaticRouter location={pagePath}>
        <App />
      </StaticRouter>
    </DataContext.Provider>
  )
}

export { routes } from 'rpress:routes'
