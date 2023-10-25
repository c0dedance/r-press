import { useEffect, useState } from 'react'

export function useHeaders(initHeaders) {
  const [headers, setHeaders] = useState(initHeaders)
  useEffect(() => {
    if (import.meta.env.DEV) {
      import.meta.hot.on(
        'mdx-changed',
        ({ filePath }: { filePath: string }) => {
          console.log(filePath, 'filePath')
          // 1. 导入最新的模块
          import(/* @vite-ignore */ `${filePath}?import&t=${Date.now()}`).then(
            (module) => {
              // 2. 拿到最新的数据
              setHeaders(module.toc)
            }
          )
        }
      )
    }
  })

  return {
    headers,
  }
}
