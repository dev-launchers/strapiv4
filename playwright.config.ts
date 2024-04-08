import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./tests/global-setup'),
  reporter: process.env.CI ? 'github' : 'list',
  webServer: {
    command: 'npm run init:test',
    url: 'http://localhost:1337',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
    timeout: 120 * 1000,
    env: {
      NODE_ENV: 'test',
      FRONTEND_URL: "not_used"
    },
  },
  use: {
    baseURL: 'http://localhost:1337',
    extraHTTPHeaders: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
  },
});