import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';
import { currentEnv } from './environments';

export default defineConfig({
  testDir: path.resolve(__dirname,'../src/tests'),
  outputDir: path.resolve(__dirname,'../test-results'),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: path.resolve(__dirname,'../playwright-report'), open: 'never' }],
    ['json', { outputFile: '../playwright-report/test-results.json' }]
  ],
  use: {
    baseURL: currentEnv.baseUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 7000,
    navigationTimeout: currentEnv.navigationTimeout
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] }
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] }
    // },
    // {
    //   name: 'mobile-chrome',
    //   use: { ...devices['Pixel 5'] }
    // }
  ],
  webServer: {
    command: 'npm --workspace=apps/web run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30 * 1000
  }
});