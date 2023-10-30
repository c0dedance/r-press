import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App, { initPageData } from './App'
import { DataContext } from './hooks'
import type { ComponentType } from 'react'

declare global {
  interface Window {
    ISLANDS: Record<string, ComponentType<unknown>>
    ISLAND_PROPS: unknown[]
  }
}

async function renderInBrowser() {
  const containerEl = document.getElementById('root')
  if (!containerEl) {
    throw new Error('#root element not found')
  }
  // dev 下走全量的 Hydration
  if (import.meta.env.DEV) {
    // 初始化 PageData
    const pageData = await initPageData(location.pathname)

    createRoot(containerEl).render(
      <HelmetProvider>
        <DataContext.Provider value={pageData}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DataContext.Provider>
      </HelmetProvider>
    )
  } else {
    // 生产环境下的 Partial Hydration
    const islands = document.querySelectorAll('[__island]') // 在自定义jsx中给islands组件包裹`div[__island]`
    if (!islands.length) {
      return
    }
    /* 
    window.ISLANDS = {
      Aside: Aside
    }
    */
    for (const island of islands) {
      // Aside:0
      const [id, index] = island.getAttribute('__island').split(':')
      const Element = window.ISLANDS[id] as ComponentType<unknown>
      // 单独对每个 island 组件 Hydrate，多次 hydrateRoot 不会像 createRoot 会产生多个 React ·实例
      hydrateRoot(island, <Element {...window.ISLAND_PROPS[index]} />)
    }
  }
}

renderInBrowser()
