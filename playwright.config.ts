import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./tests/global-setup'),
  globalTeardown: require.resolve('./tests/global-teardown'),
  reporter: process.env.CI ? [['github'], ['dot']] : 'list',
  webServer: {
    command: 'npm run strapi:test',
    url: 'http://localhost:1337',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
    timeout: 120 * 1000,
    env: {
      NODE_ENV: 'test',
      FRONTEND_URL: 'not_used',
      PLAYWRIGHT: 'true'
    },
  },
  use: {
    baseURL: 'http://localhost:1337',
    extraHTTPHeaders: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
  },
});