export function renderPaymentMethods(): string {
  return `
    <div class="space-y-4">
      <h2 class="text-base font-bold text-gray-900 flex items-center gap-2">
        <span class="w-6 h-6 bg-indigo-600 text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
        Payment Options
      </h2>

      <div class="space-y-3">
        <!-- UPI Option -->
        <label class="flex items-start gap-3 border border-gray-200 p-4 rounded-xl cursor-pointer hover:bg-gray-50 transition has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30">
          <input type="radio" name="payment_method" value="upi" checked class="mt-1 text-indigo-600 focus:ring-indigo-500" />
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-xs text-gray-900">Instant UPI</span>
              <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Fastest</span>
            </div>
            <p class="text-[11px] text-gray-500 mt-0.5">Google Pay, PhonePe, Paytm, BHIM, or Any UPI ID</p>
          </div>
        </label>

        <!-- Credit / Debit Cards -->
        <label class="flex items-start gap-3 border border-gray-200 p-4 rounded-xl cursor-pointer hover:bg-gray-50 transition has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30">
          <input type="radio" name="payment_method" value="card" class="mt-1 text-indigo-600 focus:ring-indigo-500" />
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-xs text-gray-900">Credit / Debit / ATM Card</span>
              <span class="text-[10px] text-gray-400">RuPay, Visa, Mastercard</span>
            </div>
            <p class="text-[11px] text-gray-500 mt-0.5">Supports major Indian banks with standard OTP verification</p>
          </div>
        </label>

        <!-- Net Banking -->
        <label class="flex items-start gap-3 border border-gray-200 p-4 rounded-xl cursor-pointer hover:bg-gray-50 transition has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30">
          <input type="radio" name="payment_method" value="netbanking" class="mt-1 text-indigo-600 focus:ring-indigo-500" />
          <div class="flex-1">
            <span class="font-bold text-xs text-gray-900 block">Net Banking</span>
            <p class="text-[11px] text-gray-500 mt-0.5">HDFC, SBI, ICICI, Axis, Kotak, and 50+ other banks</p>
          </div>
        </label>

        <!-- Cash on Delivery -->
        <label class="flex items-start gap-3 border border-gray-200 p-4 rounded-xl cursor-pointer hover:bg-gray-50 transition has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30">
          <input type="radio" name="payment_method" value="cod" class="mt-1 text-indigo-600 focus:ring-indigo-500" />
          <div class="flex-1">
            <span class="font-bold text-xs text-gray-900 block">Cash on Delivery (COD)</span>
            <p class="text-[11px] text-gray-500 mt-0.5">Pay via Cash or QR code on delivery at your doorstep</p>
          </div>
        </label>
      </div>
    </div>
  `;
}