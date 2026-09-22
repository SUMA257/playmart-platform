export interface PincodeInfo {
  city: string;
  state: string;
  standardDays: number;
  codAvailable: boolean;
}

export const PINCODE_DIRECTORY: Record<string, PincodeInfo> = {
  '500081': { city: 'Hyderabad', state: 'Telangana', standardDays: 2, codAvailable: true },
  '110001': { city: 'New Delhi', state: 'Delhi', standardDays: 2, codAvailable: true },
  '400001': { city: 'Mumbai', state: 'Maharashtra', standardDays: 2, codAvailable: true },
  '560001': { city: 'Bengaluru', state: 'Karnataka', standardDays: 1, codAvailable: true },
  '600001': { city: 'Chennai', state: 'Tamil Nadu', standardDays: 2, codAvailable: true },
  '700001': { city: 'Kolkata', state: 'West Bengal', standardDays: 3, codAvailable: true }
};

export function lookupPincode(pincode: string): PincodeInfo | null {
  if (PINCODE_DIRECTORY[pincode]) {
    return PINCODE_DIRECTORY[pincode];
  }
  if (/^[1-9][0-9]{5}$/.test(pincode)) {
    return { city: 'Regional Hub', state: 'India', standardDays: 4, codAvailable: true };
  }
  return null;
}