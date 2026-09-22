export interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function renderProductGallery({ images, productName }: ProductGalleryProps): string {
  const mainImage = images[0] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80';

  return `
    <div class="space-y-4">
      <!-- Main Display Image -->
      <div class="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 relative group">
        <img 
          id="main-product-image" 
          src="${mainImage}" 
          alt="${productName}" 
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      <!-- Thumbnail Selector Row -->
      ${images.length > 1 ? `
        <div class="flex gap-3 overflow-x-auto pb-2" id="gallery-thumbnails">
          ${images.map((img, index) => `
            <button 
              type="button"
              onclick="window.switchGalleryImage('${img}', this)"
              class="w-18 h-18 rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all ${index === 0 ? 'border-indigo-600 ring-2 ring-indigo-100' : 'border-gray-200 hover:border-gray-400'}"
            >
              <img src="${img}" class="w-full h-full object-cover" alt="${productName} thumbnail ${index + 1}" />
            </button>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}