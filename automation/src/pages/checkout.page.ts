import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  readonly fullNameInput: Locator;
  readonly mobileInput: Locator;
  readonly pincodeInput: Locator;
  readonly cityInput: Locator;
  readonly streetInput: Locator;
  readonly standardDeliveryRadio: Locator;
  readonly expressDeliveryRadio: Locator;
  readonly upiRadio: Locator;
  readonly codRadio: Locator;
  readonly cardRadio: Locator;
  readonly confirmOrderBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameInput = page.locator('input[placeholder="Full Name"]');
    this.mobileInput = page.locator('input[placeholder*="Mobile"]');
    this.pincodeInput = page.locator('input[placeholder="Pincode"]');
    this.cityInput = page.locator('input[placeholder="City"]');
    this.streetInput = page.locator('textarea[placeholder*="address"]');
    this.standardDeliveryRadio = page.locator('input[value="standard"]');
    this.expressDeliveryRadio = page.locator('input[value="express"]');
    this.upiRadio = page.locator('input[value="upi"]');
    this.codRadio = page.locator('input[value="cod"]');
    this.cardRadio = page.locator('input[value="card"]');
    this.confirmOrderBtn = page.locator('#place-order-btn');
  }

  async fillAddress(data: { fullName: string; mobile: string; pincode: string; city: string; street: string }) {
    await this.fullNameInput.fill(data.fullName);
    await this.mobileInput.fill(data.mobile);
    await this.pincodeInput.fill(data.pincode);
    await this.cityInput.fill(data.city);
    await this.streetInput.fill(data.street);
  }

  async selectPayment(type: 'upi' | 'card' | 'cod') {
    if (type === 'upi') await this.upiRadio.check();
    if (type === 'card') await this.cardRadio.check();
    if (type === 'cod') await this.codRadio.check();
  }

  async submitOrder() {
    await this.confirmOrderBtn.click();
  }
}