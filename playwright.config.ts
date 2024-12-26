import { defineConfig } from '@playwright/test';

export default defineConfig({
  //maxFailures: 1, // Uncomment this to exit after the first test failure
  globalSetup: require.resolve('./tests/global-setup'),
  globalTeardown: require.resolve('./tests/global-teardown'),
  reporter: process.env.CI ? [['github'], ['dot']] : 'list',
  use: {
    baseURL: 'http://localhost:1337',
    extraHTTPHeaders: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
  },
});