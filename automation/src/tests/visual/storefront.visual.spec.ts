import { test, expect } from '../../fixtures/base.fixture';

test.describe('Visual Regression: Storefront', () => {
  test('Homepage matches visual snapshot across viewport', async ({ page, homePage }) => {
    await homePage.goto();
    // Wait for hero graphic and icons to settle
    await expect(homePage.heroBanner).toBeVisible();
    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot('home-desktop-baseline.png', {
      maxDiffPixelRatio: 0.05,
      fullPage: true
    });
  });
});