import { PRODUCTS } from '../data/products';
import { formatINR } from '../utils/currency';
import { lookupPincode } from '../data/pincodes';

export function renderProductDetails(productId: string): string {
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return `
      <main class="flex-1 max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 class="text-xl font-bold text-gray-800">Product Not Found</h2>
        <a href="#/products" class="text-sm font-semibold text-indigo-600 underline">Return to catalog</a>
      </main>
    `;
  }

  const defaultPincode = '500081';
  const pincodeInfo = lookupPincode(defaultPincode);

  return `
    <main class="flex-1 max-w-7xl mx-auto px-4 py-8 w-full animate-fade-in space-y-8">
      <nav class="text-xs text-gray-400 flex items-center gap-1.5">
        <a href="#/" class="hover:text-indigo-600">PlayMart</a>
        <span>/</span>
        <a href="#/products?cat=${product.category}" class="hover:text-indigo-600">${product.category}</a>
        <span>/</span>
        <span class="text-gray-700 font-semibold truncate max-w-xs">${product.name}</span>
      </nav>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Gallery -->
        <div class="space-y-4">
          <div class="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
            <img 
              id="main-product-image" 
              src="${product.images[0]}" 
              alt="${product.name}" 
              class="w-full h-full object-cover" 
            />
          </div>
          ${product.images.length > 1 ? `
            <div class="flex gap-3">
              ${product.images.map((img, i) => `
                <button 
                  onclick="document.getElementById('main-product-image').src='${img}'"
                  class="w-16 h-16 rounded-lg border overflow-hidden hover:border-indigo-600 transition"
                >
                  <img src="${img}" class="w-full h-full object-cover" alt="Thumbnail ${i + 1}" />
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Details -->
        <div class="space-y-6">
          <div>
            <span class="text-xs font-semibold text-indigo-600 uppercase tracking-wide">${product.category}</span>
            <h1 class="text-3xl font-black text-gray-900 mt-1">${product.name}</h1>
            <div class="flex items-center gap-3 mt-2 text-xs">
              <span class="bg-amber-400 text-gray-950 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                <i data-lucide="star" class="w-3 h-3 fill-current"></i> ${product.rating}
              </span>
              <span class="text-gray-500">${product.reviewsCount} Customer Reviews</span>
            </div>
          </div>

          <div class="border-y border-gray-200 py-4">
            <div class="flex items-baseline gap-3">
              <span class="text-3xl font-black text-gray-900">${formatINR(product.price)}</span>
              <span class="text-sm text-gray-400 line-through">${formatINR(product.originalPrice)}</span>
              <span class="text-xs font-bold text-emerald-600">Inclusive of 18% GST</span>
            </div>
          </div>

          <!-- Color Swatches -->
          <div class="space-y-2">
            <span class="text-xs font-bold text-gray-700 block">Available Colors:</span>
            <div class="flex gap-2" id="color-options">
              ${product.colors.map((c, i) => `
                <button 
                  data-color="${c}"
                  onclick="window.selectColor('${c}')"
                  class="px-3 py-1.5 rounded-lg border text-xs font-semibold ${i === 0 ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-700'}"
                >
                  ${c}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Pincode Estimator -->
          <div class="border rounded-xl p-4 bg-gray-50/50 space-y-3">
            <label class="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <i data-lucide="map-pin" class="w-4 h-4 text-indigo-600"></i> Check Delivery to Pincode
            </label>
            <div class="flex gap-2 max-w-xs">
              <input 
                type="text" 
                id="pincode-input" 
                maxlength="6" 
                value="${defaultPincode}" 
                class="border rounded-lg px-3 py-1.5 text-xs flex-1 font-mono tracking-wider focus:border-indigo-600 focus:outline-none" 
              />
              <button 
                onclick="window.checkPincodeDelivery()" 
                class="bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-indigo-700"
              >
                Check
              </button>
            </div>
            <div id="pincode-result" class="text-xs text-gray-600">
              Delivery to <strong>${pincodeInfo?.city}, ${pincodeInfo?.state}</strong> in ${pincodeInfo?.standardDays} days.
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex gap-4 pt-2">
            <button 
              onclick="window.handleDetailAddToCart('${product.id}')"
              ${!product.inStock ? 'disabled' : ''}
              class="flex-1 py-3 px-6 rounded-lg font-bold text-sm ${product.inStock ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'} transition shadow-sm"
            >
              ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </main>
  `;
}