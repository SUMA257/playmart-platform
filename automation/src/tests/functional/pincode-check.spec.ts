import { test, expect } from '../../fixtures/base.fixture';
import { KNOWN_PINCODES } from '../../../config/test-data';

test.describe('Functional: Pincode Delivery Estimator', () => {
  test('Validates delivery timeline for Hyderabad pincode (500081)', async ({ pdpPage }) => {
    await pdpPage.goto('product?id=pm-101');
    const result = await pdpPage.checkDeliveryPincode(KNOWN_PINCODES.hyderabad.code);

    expect(result).toContain(KNOWN_PINCODES.hyderabad.city);
    expect(result).toContain(`${KNOWN_PINCODES.hyderabad.days} days`);
  });

  test('Shows validation error on malformed pincode', async ({ pdpPage }) => {
    await pdpPage.goto('product?id=pm-101');
    const result = await pdpPage.checkDeliveryPincode('123');

    expect(result).toContain('Please enter a valid 6-digit Indian pincode');
  });
});