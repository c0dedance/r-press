import { Nav } from '../components/Nav'
import { HomeLayout } from './HomeLayout'
import { usePageData } from '../../'
import '../styles/base.css'
import '../styles/vars.css'
import 'uno.css'

export function Layout() {
  const pageData = usePageData()
  const { pageType } = pageData
  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout />
    } else if (pageType === 'doc') {
      return <div>正文页面</div>
    } else {
      return <div>404 页面</div>
    }
  }
  return (
    <div>
      <Nav />
      {getContent()}
    </div>
  )
}
