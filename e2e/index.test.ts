import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:5173')
  // 等待网络请求完成
  await page.waitForLoadState('networkidle')

  // const html = await page.innerHTML('body')
  const html = await page.evaluate(async () => {
    return document.body.innerText
  })

  expect(html).toContain('Hello World')
})
