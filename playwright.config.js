const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  timeout: Number(process.env.TEST_TIMEOUT_MS || 120000),
  expect: { timeout: Number(process.env.ACTION_TIMEOUT_MS || 30000) },
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }], ['list']],
  use: {
    baseURL: process.env.GYANSETU_URL,
    headless: String(process.env.HEADLESS || 'false').toLowerCase() === 'true',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: Number(process.env.ACTION_TIMEOUT_MS || 30000),
    navigationTimeout: 60000,
    viewport: { width: 1440, height: 900 }
  },
  outputDir: 'test-results'
});
