import { store } from '../state/store';
import { formatINR } from '../utils/currency';
import { renderCartSummary } from '../components/cart/CartSummary';

export function renderCart(): string {
  if (store.cart.length === 0) {
    return `
      <main class="flex-1 max-w-xl mx-auto px-4 py-20 text-center space-y-4 animate-fade-in">
        <div class="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
          <i data-lucide="shopping-cart" class="w-8 h-8"></i>
        </div>
        <h1 class="text-2xl font-black text-gray-900">Your shopping cart is empty</h1>
        <p class="text-xs text-gray-500">Explore products from our catalog and discover festival discounts.</p>
        <div class="pt-2">
          <a href="#/products" class="inline-block bg-indigo-600 text-white font-bold text-xs px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition">
            Start Shopping
          </a>
        </div>
      </main>
    `;
  }

  return `
    <main class="flex-1 max-w-7xl mx-auto px-4 py-8 w-full animate-fade-in">
      <h1 class="text-2xl font-black text-gray-900 mb-6">Shopping Cart (${store.cart.length} Items)</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items List -->
        <div class="lg:col-span-2 space-y-4">
          ${store.cart.map(item => `
            <div class="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-center justify-between">
              <img src="${item.product.images[0]}" alt="${item.product.name}" class="w-20 h-20 object-cover rounded-lg bg-gray-100" />
              <div class="flex-1 min-w-0">
                <a href="#/product?id=${item.product.id}" class="font-bold text-gray-900 text-sm hover:text-indigo-600 truncate block">
                  ${item.product.name}
                </a>
                <span class="text-xs text-gray-500 block mt-0.5">Color: ${item.selectedColor}</span>
                <span class="text-sm font-extrabold text-gray-900 block mt-1">${formatINR(item.product.price)}</span>
              </div>
              
              <!-- Quantity Controls -->
              <div class="flex items-center gap-3">
                <div class="flex items-center border rounded-lg bg-gray-50">
                  <button 
                    onclick="window.appStore.updateQuantity('${item.product.id}', '${item.selectedColor}', -1)"
                    class="w-7 h-7 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100"
                  >-</button>
                  <span class="w-8 text-center text-xs font-bold text-gray-800">${item.quantity}</span>
                  <button 
                    onclick="window.appStore.updateQuantity('${item.product.id}', '${item.selectedColor}', 1)"
                    class="w-7 h-7 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100"
                  >+</button>
                </div>
                <button 
                  onclick="window.appStore.removeItem('${item.product.id}', '${item.selectedColor}')"
                  class="text-gray-400 hover:text-rose-600 p-1 transition"
                >
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Order Summary Box -->
        <div class="h-fit">
          ${renderCartSummary()}
        </div>
      </div>
    </main>
  `;
}