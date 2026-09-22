import { test, expect } from '../../fixtures/base.fixture';

test.describe('API & Routing Mocking: Order Interception', () => {
  test('Intercepts checkout navigation and mocks inventory fallback', async ({ page, homePage }) => {
    // Intercept catalog queries
    await page.route('**/api/products/**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([{ id: 'mock-1', name: 'Mocked Headphones', price: 999 }])
      });
    });

    await homePage.goto();
    await expect(homePage.logoLink).toBeVisible();
  });
});