import { store } from '../../state/store';

export function renderHeader(): string {
  const cartCount = store.cart.reduce((acc, item) => acc + item.quantity, 0);

  return `
    <header class="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <!-- Logo -->
        <a href="#/" class="flex items-center gap-2 text-2xl font-black text-indigo-600 tracking-tight hover:opacity-95">
          <i data-lucide="shopping-bag" class="w-7 h-7 stroke-[2.2]"></i>
          <span>PlayMart</span>
        </a>

        <!-- Global Search Bar -->
        <form class="flex-1 max-w-lg relative" onsubmit="window.handleSearchSubmit(event)">
          <input 
            type="search" 
            id="site-search" 
            placeholder="Search electronics, audio, apparel... (Press '/' to focus)" 
            class="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg text-sm focus:bg-white focus:border-indigo-600 focus:outline-none transition-colors"
          />
          <span class="absolute left-3 top-2.5 text-gray-400">
            <i data-lucide="search" class="w-4 h-4"></i>
          </span>
        </form>

        <!-- Navigation Links -->
        <nav class="flex items-center gap-6">
          <a href="#/products" class="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition">Catalog</a>
          <a href="#/account" class="text-sm font-semibold text-gray-700 hover:text-indigo-600 flex items-center gap-1.5 transition">
            <i data-lucide="user" class="w-4 h-4"></i>
            <span>Account</span>
          </a>
          <a href="#/cart" class="relative text-sm font-semibold text-gray-700 hover:text-indigo-600 flex items-center gap-1.5 transition">
            <i data-lucide="shopping-cart" class="w-5 h-5"></i>
            <span class="hidden sm:inline">Cart</span>
            <span id="cart-counter" class="bg-indigo-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold ml-0.5">
              ${cartCount}
            </span>
          </a>
        </nav>
      </div>
    </header>
  `;
}