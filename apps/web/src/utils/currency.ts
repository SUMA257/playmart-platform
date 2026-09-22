export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function parseINR(formattedStr: string): number {
  return Number(formattedStr.replace(/[^0-9.-]+/g, '')) || 0;
}