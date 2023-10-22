import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App, { initPageData } from './App'
import { DataContext } from './hooks'

async function renderInBrowser() {
  const containerEl = document.getElementById('root')
  if (!containerEl) {
    throw new Error('#root element not found')
  }
  // 初始化 PageData
  const pageData = await initPageData(location.pathname)
  console.log(pageData, 'pageData')

  createRoot(containerEl).render(
    <DataContext.Provider value={pageData}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContext.Provider>
  )
}

renderInBrowser()
