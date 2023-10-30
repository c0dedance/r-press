import { Helmet } from 'react-helmet-async'
import { Nav } from '../components/Nav'
import { HomeLayout } from './HomeLayout'
import { DocLayout } from './DocLayout'
import { usePageData } from '../../'
import '../styles/base.css'
import '../styles/vars.css'
import '../styles/doc.css'
import 'uno.css'

export function Layout() {
  const pageData = usePageData()
  const { pageType, title } = pageData
  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout />
    } else if (pageType === 'doc') {
      return <DocLayout />
    } else {
      return <div>404 页面</div>
    }
  }
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Nav />
      <section
        style={{
          paddingTop: 'var(--island-nav-height)',
        }}
      >
        {getContent()}
      </section>
    </div>
  )
}
