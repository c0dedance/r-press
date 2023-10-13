import { renderToString } from 'react-dom/server'
import App from './App'

// For ssr component render
export function render() {
  return renderToString(<App />)
}
