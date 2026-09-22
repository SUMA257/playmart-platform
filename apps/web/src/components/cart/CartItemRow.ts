import { CartItem } from '../../state/store';
import { formatINR } from '../../utils/currency';

export function renderCartItemRow(item: CartItem): string {
  const { product, quantity, selectedColor } = item;
  const lineTotal = product.price * quantity;

  return `
    <div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition hover:border-gray-300">
      <div class="flex gap-4 items-center min-w-0">
        <img 
          src="${product.images[0]}" 
          alt="${product.name}" 
          class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg bg-gray-100 flex-shrink-0 border border-gray-100" 
        />
        <div class="min-w-0">
          <a href="#/product?id=${product.id}" class="font-bold text-gray-900 text-sm hover:text-indigo-600 truncate block">
            ${product.name}
          </a>
          <div class="flex items-center gap-2 text-xs text-gray-500 mt-1">
            <span>Color: <strong class="text-gray-700">${selectedColor}</strong></span>
            <span>&bull;</span>
            <span>Unit: ${formatINR(product.price)}</span>
          </div>
          <div class="text-sm font-black text-gray-900 mt-1">
            ${formatINR(lineTotal)}
          </div>
        </div>
      </div>

      <!-- Action Stepper & Removal -->
      <div class="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 border-t sm:border-t-0 pt-3 sm:pt-0">
        <div class="flex items-center border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
          <button 
            type="button"
            onclick="window.appStore.updateQuantity('${product.id}', '${selectedColor}', -1)"
            class="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-200 rounded-l-lg transition"
            aria-label="Decrease quantity"
          >-</button>
          <span class="w-10 text-center text-xs font-bold text-gray-800">${quantity}</span>
          <button 
            type="button"
            onclick="window.appStore.updateQuantity('${product.id}', '${selectedColor}', 1)"
            class="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-200 rounded-r-lg transition"
            aria-label="Increase quantity"
          >+</button>
        </div>

        <button 
          type="button"
          onclick="window.appStore.removeItem('${product.id}', '${selectedColor}')"
          class="text-gray-400 hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 transition"
          title="Remove item"
          aria-label="Remove item"
        >
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;
}