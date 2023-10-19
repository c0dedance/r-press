import path from 'path'
import { RouteService } from '../../../node/plugin-routes/RouteService'

describe('RouteService', async () => {
  const testDir = path.resolve(__dirname, 'fixtures')
  const routeService = new RouteService(testDir)
  await routeService.init()

  test('conventional route by file structure', async () => {
    // 替换为通用的路径前缀
    const routeMeta = routeService.getRouteMeta().map((item) => ({
      ...item,
      absolutePath: item.absolutePath.replace(testDir, 'TEST_DIR'),
    }))
    expect(routeMeta).toMatchInlineSnapshot(`
      [
        {
          "absolutePath": "TEST_DIR/b.tsx",
          "routePath": "/b",
        },
        {
          "absolutePath": "TEST_DIR/guide/a.tsx",
          "routePath": "/guide/a",
        },
        {
          "absolutePath": "TEST_DIR/guide/index.tsx",
          "routePath": "/guide/",
        },
      ]
    `)
  })
  test('generate routes code', async () => {
    const code = routeService.generateRoutes().replaceAll(testDir, 'TEST_DIR')
    expect(code).toMatchInlineSnapshot(`
      "import React from 'react'
      import Route0 from 'TEST_DIR/b.tsx';
      import Route1 from 'TEST_DIR/guide/a.tsx';
      import Route2 from 'TEST_DIR/guide/index.tsx';
      export const routes = [
        { \\"path\\": '/b', \\"element\\": React.createElement(Route0)},
      { \\"path\\": '/guide/a', \\"element\\": React.createElement(Route1)},
      { \\"path\\": '/guide/', \\"element\\": React.createElement(Route2)},
        ]
      "
    `)
  })
})
