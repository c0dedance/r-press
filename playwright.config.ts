import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 50 * 1000,
  webServer: {
    url: 'http://localhost:5173',
    command: 'pnpm prepare:e2e',
  },
  use: {
    headless: true, // 使用无头浏览器（no ui）
  },
}

export default config
