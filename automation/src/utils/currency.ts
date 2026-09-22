export function extractINRValue(priceStr: string): number {
  const sanitized = priceStr.replace(/[^0-9.]/g, '');
  return parseFloat(sanitized) || 0;
}

/**
 * Calculates 18% GST on taxable base
 */
export function calculateExpectedGST(taxableAmount: number): number {
  return Math.round(taxableAmount * 0.18);
}