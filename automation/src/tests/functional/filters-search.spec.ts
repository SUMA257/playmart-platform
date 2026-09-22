import { test, expect } from '../../fixtures/base.fixture';

test.describe('Functional: Catalog Filters & Search', () => {
  test('Filters products by Audio category dropdown', async ({ catalogPage }) => {
    await catalogPage.goto('products');
    await catalogPage.filterByCategory('Audio');

    const count = await catalogPage.getDisplayedProductCount();
    expect(count).toBeGreaterThan(0);
    await expect(catalogPage.productCards.first()).toContainText('AcousticPro');
  });

  test('Debounced search bar responds to keyword query', async ({ page, homePage }) => {
    await homePage.goto();
    await homePage.searchProduct('Mechanical');

    await expect(page).toHaveURL(/.*#\/products\?q=Mechanical/);
    await expect(page.getByText('Apex Mechanical Gasket Keyboard')).toBeVisible();
  });
});