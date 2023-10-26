import { useLocation } from 'react-router-dom'
import { Content, usePageData } from '../../../'
import { Sidebar } from '../../components/Sidebar/'
import { DocFooter } from '../../components/DocFooter'
import { Aside } from '../../components/Aside'
import styles from './index.module.scss'

export function DocLayout() {
  const { siteData, toc } = usePageData()
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
      <div className={styles.content} flex="~">
        <div className={styles.docContent}>
          <div className="island-doc">
            <Content />
          </div>
          <DocFooter />
        </div>
        <div className={styles.asideContainer}>
          <Aside headers={toc} __island />
        </div>
      </div>
    </div>
  )
}
