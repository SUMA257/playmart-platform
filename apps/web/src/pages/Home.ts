import { PRODUCTS } from '../data/products';
import { renderProductCard } from '../components/product/ProductCard';

export function renderHome(): string {
  return `
    <main class="flex-1 max-w-7xl mx-auto px-4 py-8 w-full space-y-12 animate-fade-in">
      <!-- Mega Hero Banner -->
      <section class="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 text-white p-8 md:p-14 relative overflow-hidden shadow-lg">
        <div class="max-w-xl space-y-4 relative z-10">
          <span class="inline-block bg-amber-400 text-gray-950 font-black text-xs uppercase px-3 py-1 rounded-full tracking-wide">
            Great Indian Electronics Fest
          </span>
          <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Upgrade Your Desk & Audio Gear
          </h1>
          <p class="text-indigo-200 text-sm leading-relaxed">
            Flat 20% off using coupon <span class="bg-indigo-900 px-2 py-0.5 rounded font-mono font-bold text-amber-300">FESTIVE20</span> on all orders over ₹499.
          </p>
          <div class="pt-2">
            <a href="#/products" class="inline-block bg-white text-indigo-950 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow">
              Shop The Catalog
            </a>
          </div>
        </div>
      </section>

      <!-- Trust Badges -->
      <section class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-4 border-y border-gray-200">
        <div class="space-y-1">
          <i data-lucide="truck" class="w-6 h-6 mx-auto text-indigo-600"></i>
          <h4 class="text-xs font-bold text-gray-800">Free Delivery</h4>
          <p class="text-[11px] text-gray-500">On all orders above ₹499</p>
        </div>
        <div class="space-y-1">
          <i data-lucide="shield-check" class="w-6 h-6 mx-auto text-indigo-600"></i>
          <h4 class="text-xs font-bold text-gray-800">100% Genuine</h4>
          <p class="text-[11px] text-gray-500">Direct brand warranty</p>
        </div>
        <div class="space-y-1">
          <i data-lucide="refresh-cw" class="w-6 h-6 mx-auto text-indigo-600"></i>
          <h4 class="text-xs font-bold text-gray-800">7 Days Return</h4>
          <p class="text-[11px] text-gray-500">Doorstep replacement</p>
        </div>
        <div class="space-y-1">
          <i data-lucide="credit-card" class="w-6 h-6 mx-auto text-indigo-600"></i>
          <h4 class="text-xs font-bold text-gray-800">Secure Payments</h4>
          <p class="text-[11px] text-gray-500">UPI, Cards & NetBanking</p>
        </div>
      </section>

      <!-- Products Grid -->
      <section class="space-y-6">
        <div class="flex justify-between items-end">
          <div>
            <h2 class="text-2xl font-bold text-gray-900">Featured Products</h2>
            <p class="text-xs text-gray-500 mt-0.5">Top-rated equipment curated for work and productivity</p>
          </div>
          <a href="#/products" class="text-xs font-bold text-indigo-600 hover:text-indigo-700">View Catalog &rarr;</a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${PRODUCTS.map(product => renderProductCard(product)).join('')}
        </div>
      </section>
    </main>
  `;
}