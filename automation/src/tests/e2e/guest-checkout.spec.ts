import { test, expect } from '../../fixtures/base.fixture';
import { TEST_USERS, PROMO_CODES } from '../../../config/test-data';

test.describe('E2E: Guest Checkout Journey', () => {
  test('Complete purchase flow: Home -> Add to Cart -> Apply Coupon -> Checkout -> Confirmed', async ({
    page,
    homePage,
    cartPage,
    checkoutPage
  }) => {
    // 1. Visit Home
    await homePage.goto();
    await expect(homePage.heroBanner).toBeVisible();

    // 2. Add First Featured Item
    await homePage.addFeaturedProductToCart(0);
    expect(await homePage.getCartCount()).toBe(1);

    // 3. Open Cart & Verify Pricing
    await homePage.cartNav.click();
    await expect(page).toHaveURL(/.*#\/cart/);

    // 4. Apply Festive Coupon
    await cartPage.applyCoupon(PROMO_CODES.festive20);
    await expect(cartPage.discountRow).toBeVisible();

    // 5. Proceed to Checkout
    await cartPage.proceedCheckoutBtn.click();
    await expect(page).toHaveURL(/.*#\/checkout/);

    // 6. Fill Shipping & Submit UPI Order
    await checkoutPage.fillAddress(TEST_USERS.standard);
    await checkoutPage.selectPayment('upi');
    await checkoutPage.submitOrder();

    // 7. Verify Order Confirmation
    await expect(page).toHaveURL(/.*#\/confirmed/);
    await expect(page.getByText('Order Placed Successfully!')).toBeVisible();
    await expect(page.getByText(/PM-\d{6}/)).toBeVisible();
  });
});