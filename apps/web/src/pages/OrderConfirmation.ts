export function renderOrderConfirmation(): string {
  const orderId = 'PM-' + Math.floor(100000 + Math.random() * 900000);

  return `
    <main class="flex-1 max-w-lg mx-auto px-4 py-20 text-center space-y-4 animate-fade-in">
      <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
        <i data-lucide="check-circle" class="w-8 h-8"></i>
      </div>
      <h1 class="text-2xl font-black text-gray-900">Order Placed Successfully!</h1>
      <p class="text-xs text-gray-500">
        Your order id is <strong class="font-mono text-gray-900">${orderId}</strong>. A tracking SMS has been dispatched to your mobile number.
      </p>
      <div class="pt-4 flex justify-center gap-3">
        <a href="#/" class="bg-indigo-600 text-white font-bold text-xs px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition">
          Back to PlayMart
        </a>
      </div>
    </main>
  `;
}