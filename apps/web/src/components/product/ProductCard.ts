import { Product } from '../../data/products';
import { formatINR } from '../../utils/currency';

export function renderProductCard(product: Product): string {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return `
    <div class="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between group">
      <div class="relative bg-gray-100 aspect-square overflow-hidden cursor-pointer" onclick="window.location.hash='#/product?id=${product.id}'">
        <img 
          src="${product.images[0]}" 
          alt="${product.name}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        ${discount > 0 ? `
          <span class="absolute top-2 left-2 bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
            ${discount}% OFF
          </span>
        ` : ''}
        ${!product.inStock ? `
          <div class="absolute inset-0 bg-white/75 backdrop-blur-[2px] flex items-center justify-center">
            <span class="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded">Out of Stock</span>
          </div>
        ` : ''}
      </div>
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center text-xs text-gray-500 mb-1">
            <span>${product.category}</span>
            <div class="flex items-center gap-1 text-amber-500 font-semibold">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <span>${product.rating}</span>
            </div>
          </div>
          <a href="#/product?id=${product.id}" class="font-bold text-gray-900 text-sm hover:text-indigo-600 line-clamp-1 block">
            ${product.name}
          </a>
          <p class="text-xs text-gray-500 mt-1 line-clamp-2">${product.description}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div class="text-base font-extrabold text-gray-900">${formatINR(product.price)}</div>
            <div class="text-xs text-gray-400 line-through">${formatINR(product.originalPrice)}</div>
          </div>
          <button 
            onclick="window.appStore.addToCart('${product.id}')"
            ${!product.inStock ? 'disabled' : ''}
            class="px-3 py-1.5 rounded-lg text-xs font-semibold ${product.inStock ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'} transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}