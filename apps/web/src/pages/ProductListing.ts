import { PRODUCTS, Product } from '../data/products';
import { renderProductCard } from '../components/product/ProductCard';

export function renderProductListing(searchQuery?: string, categoryFilter?: string): string {
  let filtered: Product[] = [...PRODUCTS];

  if (categoryFilter) {
    filtered = filtered.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }

  return `
    <main class="flex-1 max-w-7xl mx-auto px-4 py-8 w-full animate-fade-in space-y-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
        <div>
          <h1 class="text-2xl font-black text-gray-900">
            ${searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
          </h1>
          <p class="text-xs text-gray-500 mt-1">Showing ${filtered.length} products</p>
        </div>

        <div class="flex items-center gap-3">
          <select 
            id="category-filter" 
            onchange="window.location.hash = this.value ? '#/products?cat=' + this.value : '#/products'"
            class="text-xs border rounded-lg p-2 bg-white text-gray-700 focus:border-indigo-600 focus:outline-none"
          >
            <option value="">All Categories</option>
            <option value="Electronics" ${categoryFilter === 'Electronics' ? 'selected' : ''}>Electronics</option>
            <option value="Audio" ${categoryFilter === 'Audio' ? 'selected' : ''}>Audio</option>
            <option value="Home" ${categoryFilter === 'Home' ? 'selected' : ''}>Home</option>
            <option value="Fashion" ${categoryFilter === 'Fashion' ? 'selected' : ''}>Fashion</option>
          </select>
        </div>
      </div>

      ${filtered.length === 0 ? `
        <div class="text-center py-16 space-y-3">
          <i data-lucide="package-x" class="w-12 h-12 mx-auto text-gray-400"></i>
          <h3 class="text-base font-bold text-gray-800">No matching products found</h3>
          <p class="text-xs text-gray-500">Try adjusting your category filter or search keywords.</p>
          <a href="#/products" class="inline-block text-xs font-semibold text-indigo-600 underline">Reset all filters</a>
        </div>
      ` : `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${filtered.map(p => renderProductCard(p)).join('')}
        </div>
      `}
    </main>
  `;
}