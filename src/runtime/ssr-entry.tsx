import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import App from './App'

// For ssr component render
export function render(pagePath: string) {
  return renderToString(
    <StaticRouter location={pagePath}>
      <App />
    </StaticRouter>
  )
}

export { routes } from 'rpress:routes'
