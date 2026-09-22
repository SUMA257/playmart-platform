import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { extractINRValue } from '../utils/currency';

export class CartPage extends BasePage {
  readonly couponInput: Locator;
  readonly applyCouponBtn: Locator;
  readonly subtotalText: Locator;
  readonly discountRow: Locator;
  readonly gstText: Locator;
  readonly deliveryFeeText: Locator;
  readonly totalText: Locator;
  readonly proceedCheckoutBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.couponInput = page.locator('#coupon-input');
    this.applyCouponBtn = page.getByRole('button', { name: 'Apply' });
    this.subtotalText = page.locator('text=Subtotal >> xpath=..').locator('span:last-child');
    this.discountRow = page.locator('text=Coupon Discount >> xpath=..');
    this.gstText = page.locator('text=Estimated GST >> xpath=..').locator('span:last-child');
    this.deliveryFeeText = page.locator('text=Delivery Charges >> xpath=..').locator('span:last-child');
    this.totalText = page.locator('text=Total Amount >> xpath=..').locator('span:last-child');
    this.proceedCheckoutBtn = page.getByRole('link', { name: 'Proceed to Checkout' });
  }

  async applyCoupon(code: string) {
    await this.couponInput.fill(code);
    await this.applyCouponBtn.click();
  }

  async getPricingBreakdown() {
    const subtotal = extractINRValue(await this.subtotalText.innerText());
    const gst = extractINRValue(await this.gstText.innerText());
    const total = extractINRValue(await this.totalText.innerText());

    let discount = 0;
    if (await this.discountRow.isVisible()) {
      discount = extractINRValue(await this.discountRow.locator('span:last-child').innerText());
    }

    return { subtotal, discount, gst, total };
  }
}