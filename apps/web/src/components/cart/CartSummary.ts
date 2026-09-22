import { store } from '../../state/store';
import { formatINR } from '../../utils/currency';

export function renderCartSummary(): string {
  const subtotal = store.getSubtotal();
  const discount = store.getDiscount();
  const tax = store.getTax();
  const shipping = store.getShippingFee();
  const total = store.getTotal();

  return `
    <div class="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
      <h2 class="font-bold text-base text-gray-900">Price Details</h2>
      
      <div class="space-y-3 text-sm text-gray-600">
        <div class="flex justify-between">
          <span>Subtotal (${store.cart.length} items)</span>
          <span class="font-semibold text-gray-900">${formatINR(subtotal)}</span>
        </div>

        ${discount > 0 ? `
          <div class="flex justify-between text-emerald-600 font-medium">
            <span>Coupon Discount</span>
            <span>-${formatINR(discount)}</span>
          </div>
        ` : ''}

        <div class="flex justify-between">
          <span>Estimated GST (18%)</span>
          <span class="font-semibold text-gray-900">${formatINR(tax)}</span>
        </div>

        <div class="flex justify-between items-center">
          <span>Delivery Charges</span>
          <span class="font-semibold ${shipping === 0 ? 'text-emerald-600' : 'text-gray-900'}">
            ${shipping === 0 ? 'FREE' : formatINR(shipping)}
          </span>
        </div>

        <div class="border-t border-gray-200 pt-3 flex justify-between font-extrabold text-base text-gray-900">
          <span>Total Amount</span>
          <span>${formatINR(total)}</span>
        </div>
      </div>

      <!-- Promo Input -->
      <div class="border-t border-gray-100 pt-4 space-y-2">
        <div class="flex gap-2">
          <input 
            type="text" 
            id="coupon-input" 
            placeholder="Coupon (Try FESTIVE20)" 
            value="${store.currentCoupon || ''}"
            class="border rounded-lg px-3 py-2 text-xs flex-1 uppercase tracking-wider font-mono focus:border-indigo-600 focus:outline-none"
          />
          <button 
            onclick="window.handleApplyCoupon()" 
            class="bg-gray-900 text-white px-4 py-2 text-xs font-bold rounded-lg hover:bg-black transition"
          >
            Apply
          </button>
        </div>
        ${store.currentCoupon ? `
          <div class="flex justify-between items-center text-xs text-emerald-600">
            <span>Code <strong>${store.currentCoupon}</strong> applied</span>
            <button onclick="window.appStore.removeCoupon()" class="text-rose-500 hover:underline">Remove</button>
          </div>
        ` : ''}
      </div>

      <a 
        href="#/checkout" 
        class="block text-center w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition shadow-sm"
      >
        Proceed to Checkout
      </a>
    </div>
  `;
}