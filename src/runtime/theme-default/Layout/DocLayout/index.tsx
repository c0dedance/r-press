import { useLocation } from 'react-router-dom'
import { usePageData } from '../../../'
import { Sidebar } from '../../components/Sidebar/'

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
    </div>
  )
}
