import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:5173')

  // const html = await page.innerHTML('body')
  const html = await page.evaluate(async () => {
    return document.body.innerText
  })

  expect(html).toContain('This is Layout Component')
})
