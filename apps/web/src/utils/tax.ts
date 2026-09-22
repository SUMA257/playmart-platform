export const GST_RATE = 0.18; // 18% standard electronic & lifestyle goods rate in India
export const FREE_DELIVERY_THRESHOLD = 499;
export const STANDARD_DELIVERY_FEE = 79;
export const EXPRESS_DELIVERY_FEE = 149;

export function computeGST(subtotal: number): number {
  return Math.round(subtotal * GST_RATE);
}

export function calculateShipping(subtotal: number, isExpress: boolean = false): number {
  if (subtotal === 0) return 0;
  if (isExpress) return EXPRESS_DELIVERY_FEE;
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
}