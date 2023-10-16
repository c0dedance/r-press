import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import App from './App'

// For ssr component render
export function render() {
  return renderToString(
    <StaticRouter location="/guide">
      <App />
    </StaticRouter>
  )
}
