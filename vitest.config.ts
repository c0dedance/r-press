import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    exclude: ['**/node_modules/**', '**/dist/**'],
    globals: true,
    passWithNoTests: true,
    threads: true,
  },
})
