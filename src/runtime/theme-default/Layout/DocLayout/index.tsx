import { useLocation } from 'react-router-dom'
import { Content, usePageData } from '../../../'
import { Sidebar } from '../../components/Sidebar/'
import styles from './index.module.scss'

export function DocLayout() {
  const { siteData } = usePageData()
  const sidebarData = siteData.themeConfig?.sidebar || {}
  const { pathname } = useLocation()
  // Location.pathname  -> sidebar[location.pathname]
  const matchedSidebarKey = Object.keys(sidebarData).find((key) =>
    pathname.startsWith(key)
  )

  const matchedSidebar = sidebarData[matchedSidebarKey] || []

  return (
    <div>
      <Sidebar sidebarData={matchedSidebar} pathname={pathname} />
      <div className={styles.content}>
        <div>
          <div className="island-doc">
            <Content />
          </div>
        </div>
      </div>
    </div>
  )
}
