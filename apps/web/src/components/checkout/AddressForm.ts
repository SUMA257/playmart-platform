import { ShippingAddress } from '../../state/store';

export function renderAddressForm(address: ShippingAddress): string {
  return `
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-base font-bold text-gray-900 flex items-center gap-2">
          <span class="w-6 h-6 bg-indigo-600 text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
          Delivery Address
        </h2>
        <span class="text-xs text-indigo-600 font-medium cursor-pointer hover:underline">Use Saved Address</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
          <input 
            required 
            type="text" 
            name="fullName"
            placeholder="e.g. Arun Varma" 
            value="${address.fullName}" 
            class="w-full border border-gray-300 rounded-lg p-2.5 text-xs focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none" 
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-gray-700 mb-1">10-Digit Mobile Number</label>
          <input 
            required 
            type="tel" 
            name="mobile"
            pattern="[0-9]{10}" 
            placeholder="e.g. 9876543210" 
            value="${address.mobile}" 
            class="w-full border border-gray-300 rounded-lg p-2.5 text-xs focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none" 
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-gray-700 mb-1">Pincode</label>
          <input 
            required 
            type="text" 
            name="pincode"
            maxlength="6"
            pattern="[0-9]{6}"
            placeholder="6-digit Pincode" 
            value="${address.pincode}" 
            class="w-full border border-gray-300 rounded-lg p-2.5 text-xs font-mono focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none" 
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-gray-700 mb-1">City / Town</label>
          <input 
            required 
            type="text" 
            name="city"
            placeholder="City" 
            value="${address.city}" 
            class="w-full border border-gray-300 rounded-lg p-2.5 text-xs focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none" 
          />
        </div>

        <div class="md:col-span-2">
          <label class="block text-xs font-semibold text-gray-700 mb-1">Flat, House no., Building, Company, Apartment</label>
          <textarea 
            required 
            name="street"
            rows="2"
            placeholder="Street details and nearby landmark" 
            class="w-full border border-gray-300 rounded-lg p-2.5 text-xs focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
          >${address.street}</textarea>
        </div>
      </div>
    </div>
  `;
}