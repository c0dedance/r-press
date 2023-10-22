import { createContext, useContext } from 'react'
import type { PageData } from 'shared/types'

export const DataContext = createContext({} as PageData)

/* 提供数据供前端组件消费 */
export const usePageData = () => {
  return useContext(DataContext)
}
