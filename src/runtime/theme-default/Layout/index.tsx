import { Content } from '../../Content'

export function Layout() {
  return (
    <div>
      <h1>nav</h1>
      <aside>sidebar</aside>
      <aside>
        <Content />
      </aside>
    </div>
  )
}
