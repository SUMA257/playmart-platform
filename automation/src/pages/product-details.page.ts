import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductDetailsPage extends BasePage {
  readonly productHeading: Locator;
  readonly priceTag: Locator;
  readonly mainImage: Locator;
  readonly colorButtons: Locator;
  readonly pincodeInput: Locator;
  readonly checkPincodeBtn: Locator;
  readonly pincodeResult: Locator;
  readonly addToCartBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.productHeading = page.locator('h1');
    this.priceTag = page.locator('.text-3xl.font-black');
    this.mainImage = page.locator('#main-product-image');
    this.colorButtons = page.locator('#color-options button');
    this.pincodeInput = page.locator('#pincode-input');
    this.checkPincodeBtn = page.getByRole('button', { name: 'Check' });
    this.pincodeResult = page.locator('#pincode-result');
    this.addToCartBtn = page.getByRole('button', { name: 'Add to Cart' });
  }

  async selectColor(colorName: string) {
    await this.colorButtons.filter({ hasText: colorName }).click();
  }

  async checkDeliveryPincode(pincode: string): Promise<string> {
    await this.pincodeInput.fill(pincode);
    await this.checkPincodeBtn.click();
    return await this.pincodeResult.innerText();
  }
}