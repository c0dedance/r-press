import { useRoutes } from 'react-router-dom'
import A from '../../e2e/playground/basic/docs/guide/a'
import B from '../../e2e/playground/basic/docs/b'
import Index from '../../e2e/playground/basic/docs/guide'

const routes = [
  {
    path: '/guide',
    element: <Index />,
  },
  {
    path: '/guide/a',
    element: <A />,
  },
  {
    path: '/b',
    element: <B />,
  },
]

export const Content = () => {
  const routeElement = useRoutes(routes)
  return routeElement
}
