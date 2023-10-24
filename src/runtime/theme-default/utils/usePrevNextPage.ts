import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { usePageData } from '../../'
import type { SidebarItem } from 'shared/types'

export function usePrevNextPage() {
  const { pathname } = useLocation()
  const { siteData } = usePageData()
  const sidebar = siteData.themeConfig?.sidebar || {}

  const flattenTitles = useMemo(() => {
    const res: SidebarItem[] = []
    // 遍历 Sidebar 数据，收集所有的文章信息，并平铺到一个数组里面
    Object.keys(sidebar).forEach((key) => {
      const groups = sidebar[key] || []
      groups.forEach((group) => {
        group.items.forEach((item) => {
          res.push(item)
        })
      })
    })
    return res
  }, [sidebar])

  const pageIndex = flattenTitles.findIndex((item) => item.link === pathname)

  const prevPage = flattenTitles[pageIndex - 1] || null
  const nextPage = flattenTitles[pageIndex + 1] || null

  return {
    prevPage,
    nextPage,
  }
}
