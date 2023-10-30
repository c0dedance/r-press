import * as jsxRuntime from 'react/jsx-runtime'

// 拿到 React 原始的 jsxRuntime 方法，包括 jsx 和 jsxs
// 注: 对于一些静态节点，React 会使用 jsxs 来进行创建，优化渲染性能
const originJsx = jsxRuntime.jsx
const originJsxs = jsxRuntime.jsxs

export const data = {
  islandProps: [], // Islands 组件的数据
  islandPathToMap: {}, // 记录 Island 组件的路径信息 id -> path(importer & import path)
}
/* 
IslandData  {
  islandProps: [ { headers: [Array] } ],
  islandPathToMap: {
    Aside: '../../components/Aside!!ISLAND!!/Users/admin/project/r-press/src/runtime/theme-default/Layout/DocLayout/index.tsx'
  }
}
*/
const internalJsx = (jsx, type, props, ...args) => {
  // 如果发现有 __island 这个 prop，则视为一个 Island 组件，记录下来
  if (props && props.__island) {
    data.islandProps.push(props)
    const id = type.name // Aside
    data.islandPathToMap[id] = props.__island

    delete props.__island
    // 对 island 组件包裹一层div，并通过 __island 进行标识 Islands 组件的 ID 以及 props 数据在 islandProps 中的位置。
    return jsx('div', {
      __island: `${id}:${data.islandProps.length - 1}`, // 自增的id
      children: jsx(type, props, ...args),
    })
  }
  // 否则走原始的 jsx/jsxs 方法
  return jsx(type, props, ...args)
}

// 下面是我们自定义的 jsx 和 jsxs
export const jsx = (...args) => internalJsx(originJsx, ...args)

export const jsxs = (...args) => internalJsx(originJsxs, ...args)

export const Fragment = jsxRuntime.Fragment //  jsx-runtime 文件中，不能缺少 Fragment 的导出

export const clearIslandData = () => {
  data.islandProps = []
  data.islandPathToMap = {}
}
