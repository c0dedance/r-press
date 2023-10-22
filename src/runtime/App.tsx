import { matchRoutes } from 'react-router-dom'
import { Layout } from './theme-default'
import siteData from 'rpress:site-data'
import { routes } from 'rpress:routes'
import type { PageData } from 'shared/types'

export default function App() {
  return (
    <>
      <Layout />
    </>
  )
}

export async function initPageData(routePath: string): Promise<PageData> {
  const matched = matchRoutes(routes, routePath)
  if (!matched) {
    return {
      siteData,
      pagePath: routePath,
      frontmatter: {},
      pageType: '404',
    }
  }
  const moduleInfo = await matched[0].route.preload()
  return {
    siteData,
    pagePath: routePath,
    frontmatter: moduleInfo.frontmatter,
    pageType: 'doc',
  }
}
