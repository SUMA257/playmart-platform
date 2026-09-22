import { test, expect } from '../../fixtures/base.fixture';
import { PROMO_CODES } from '../../../config/test-data';
import { calculateExpectedGST } from '../../utils/currency';

test.describe('Functional: Cart Tax & Discounts', () => {
  test('Applies 18% GST correctly on discounted subtotal', async ({
    page,
    homePage,
    cartPage
  }) => {
    await homePage.goto();
    await homePage.addFeaturedProductToCart(0);
    await homePage.cartNav.click();

    // 1. Verify before coupon
    let pricing = await cartPage.getPricingBreakdown();
    let expectedTax = calculateExpectedGST(pricing.subtotal);
    expect(pricing.gst).toBe(expectedTax);

    // 2. Apply 20% discount coupon
    await cartPage.applyCoupon(PROMO_CODES.festive20);
    pricing = await cartPage.getPricingBreakdown();

    const expectedDiscount = Math.round(pricing.subtotal * 0.20);
    expect(pricing.discount).toBe(expectedDiscount);

    // 3. Tax must be computed on (Subtotal - Discount)
    const expectedDiscountedTax = calculateExpectedGST(pricing.subtotal - pricing.discount);
    expect(pricing.gst).toBe(expectedDiscountedTax);
    expect(pricing.total).toBe(pricing.subtotal - pricing.discount + pricing.gst);
  });
});