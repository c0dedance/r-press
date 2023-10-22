import { Content } from '../../Content'
import 'uno.css'

export function Layout() {
  return (
    <div>
      <h1>nav</h1>
      <aside font="bold">sidebar</aside>
      <aside>
        <Content />
      </aside>
    </div>
  )
}
