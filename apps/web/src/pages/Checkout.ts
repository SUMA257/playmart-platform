import { store } from '../state/store';
import { formatINR } from '../utils/currency';

export function renderCheckout(): string {
  return `
    <main class="flex-1 max-w-4xl mx-auto px-4 py-8 w-full animate-fade-in">
      <h1 class="text-2xl font-black text-gray-900 mb-6">Delivery & Payment Checkout</h1>
      <form id="checkout-form" onsubmit="window.handleOrderSubmit(event)" class="space-y-8 bg-white border border-gray-200 rounded-xl p-6 md:p-8">
        
        <!-- Step 1: Address -->
        <div class="space-y-4">
          <h2 class="text-base font-bold text-gray-900 flex items-center gap-2">
            <span class="w-6 h-6 bg-indigo-600 text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
            Shipping Address
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required type="text" placeholder="Full Name" value="${store.address.fullName}" class="border rounded-lg p-2.5 text-xs focus:border-indigo-600 focus:outline-none" />
            <input required type="tel" pattern="[0-9]{10}" placeholder="10-digit Mobile Number" value="${store.address.mobile}" class="border rounded-lg p-2.5 text-xs focus:border-indigo-600 focus:outline-none" />
            <input required type="text" placeholder="Pincode" value="${store.address.pincode}" class="border rounded-lg p-2.5 text-xs focus:border-indigo-600 focus:outline-none" />
            <input required type="text" placeholder="City" value="${store.address.city}" class="border rounded-lg p-2.5 text-xs focus:border-indigo-600 focus:outline-none" />
            <textarea required placeholder="House / Flat / Street address" class="border rounded-lg p-2.5 text-xs md:col-span-2 focus:border-indigo-600 focus:outline-none">${store.address.street}</textarea>
          </div>
        </div>

        <!-- Step 2: Delivery Speed -->
        <div class="space-y-4 border-t border-gray-100 pt-6">
          <h2 class="text-base font-bold text-gray-900 flex items-center gap-2">
            <span class="w-6 h-6 bg-indigo-600 text-white rounded-full text-xs flex items-center justify-center font-bold">2</span>
            Delivery Speed
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label class="flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="radio" 
                name="delivery_speed" 
                value="standard" 
                ${!store.isExpressDelivery ? 'checked' : ''} 
                onchange="window.appStore.setExpressDelivery(false)"
                class="text-indigo-600" 
              />
              <div>
                <span class="font-bold text-xs block text-gray-900">Standard Delivery</span>
                <span class="text-[11px] text-gray-500">2-4 business days (FREE above ₹499)</span>
              </div>
            </label>
            <label class="flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-50">
              <input 
                type="radio" 
                name="delivery_speed" 
                value="express" 
                ${store.isExpressDelivery ? 'checked' : ''} 
                onchange="window.appStore.setExpressDelivery(true)"
                class="text-indigo-600" 
              />
              <div>
                <span class="font-bold text-xs block text-gray-900">Express Priority (+₹149)</span>
                <span class="text-[11px] text-gray-500">Delivered within 24 hours</span>
              </div>
            </label>
          </div>
        </div>

        <!-- Step 3: Payment Method -->
        <div class="space-y-4 border-t border-gray-100 pt-6">
          <h2 class="text-base font-bold text-gray-900 flex items-center gap-2">
            <span class="w-6 h-6 bg-indigo-600 text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
            Select Payment Method
          </h2>
          <div class="space-y-3">
            <label class="flex items-center gap-3 border p-3.5 rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="payment_method" value="upi" checked class="text-indigo-600" />
              <div>
                <span class="font-bold text-xs block text-gray-900">UPI (Google Pay, PhonePe, Paytm, BHIM)</span>
                <span class="text-[11px] text-gray-500">Zero transaction fee direct bank UPI</span>
              </div>
            </label>
            <label class="flex items-center gap-3 border p-3.5 rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="payment_method" value="card" class="text-indigo-600" />
              <div>
                <span class="font-bold text-xs block text-gray-900">Credit / Debit Card / RuPay</span>
                <span class="text-[11px] text-gray-500">All major Indian banks supported</span>
              </div>
            </label>
            <label class="flex items-center gap-3 border p-3.5 rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="payment_method" value="cod" class="text-indigo-600" />
              <div>
                <span class="font-bold text-xs block text-gray-900">Cash on Delivery (COD)</span>
                <span class="text-[11px] text-gray-500">Pay via cash or UPI scan at delivery</span>
              </div>
            </label>
          </div>
        </div>

        <!-- Bottom Action -->
        <div class="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span class="text-xs text-gray-500 block">Total Payable Amount</span>
            <span class="text-xl font-black text-gray-900">${formatINR(store.getTotal())}</span>
          </div>
          <button 
            type="submit" 
            id="place-order-btn" 
            class="w-full sm:w-auto bg-indigo-600 text-white font-bold px-10 py-3 rounded-lg hover:bg-indigo-700 transition shadow-sm"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </main>
  `;
}