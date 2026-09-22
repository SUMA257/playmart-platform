import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  reporter: 'html',

  use: {
    /* Set the base URL for relative page.goto() calls */
    baseURL: process.env.BASE_URL || 'http://localhost:5173',

    /* Directs Playwright to launch system Google Chrome */
    channel: 'chrome',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],
});