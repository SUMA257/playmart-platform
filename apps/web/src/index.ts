import { renderHeader } from './components/common/Header';
import { renderFooter } from './components/common/Footer';
import { resolveRoute } from './routes/router';
import { store } from './state/store';
import { lookupPincode } from './data/pincodes';

// Bind store to window for direct element event handler execution
(window as any).appStore = store;

(window as any).selectColor = (color: string) => {
  const container = document.getElementById('color-options');
  if (!container) return;
  const buttons = container.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-color') === color) {
      btn.className = 'px-3 py-1.5 rounded-lg border text-xs font-semibold border-indigo-600 bg-indigo-50 text-indigo-700';
    } else {
      btn.className = 'px-3 py-1.5 rounded-lg border text-xs font-semibold border-gray-200 text-gray-700';
    }
  });
};

(window as any).checkPincodeDelivery = () => {
  const input = document.getElementById('pincode-input') as HTMLInputElement;
  const resultDiv = document.getElementById('pincode-result');
  if (!input || !resultDiv) return;

  const info = lookupPincode(input.value.trim());
  if (info) {
    resultDiv.innerHTML = `Standard delivery to <strong>${info.city}, ${info.state}</strong> in ${info.standardDays} days. COD Available: ${info.codAvailable ? 'Yes' : 'No'}.`;
    resultDiv.className = 'text-xs text-emerald-600';
  } else {
    resultDiv.innerText = 'Please enter a valid 6-digit Indian pincode.';
    resultDiv.className = 'text-xs text-rose-600';
  }
};

(window as any).handleDetailAddToCart = (productId: string) => {
  const container = document.getElementById('color-options');
  const activeBtn = container?.querySelector('.border-indigo-600');
  const color = activeBtn?.getAttribute('data-color') || undefined;
  store.addToCart(productId, color);
};

(window as any).handleApplyCoupon = () => {
  const input = document.getElementById('coupon-input') as HTMLInputElement;
  if (!input) return;
  const res = store.applyCoupon(input.value);
  if (!res.success) {
    alert(res.message);
  }
};

(window as any).handleOrderSubmit = (e: Event) => {
  e.preventDefault();
  const btn = document.getElementById('place-order-btn') as HTMLButtonElement;
  if (btn) {
    btn.disabled = true;
    btn.innerText = 'Processing Order...';
  }
  setTimeout(() => {
    store.clearCart();
    window.location.hash = '#/confirmed';
  }, 500);
};

(window as any).handleSearchSubmit = (e: Event) => {
  e.preventDefault();
  const input = document.getElementById('site-search') as HTMLInputElement;
  if (!input) return;
  window.location.hash = `#/products?q=${encodeURIComponent(input.value.trim())}`;
};

// Global Hotkey '/' to focus search
window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
    e.preventDefault();
    const search = document.getElementById('site-search');
    search?.focus();
  }
});

function renderApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  const currentHash = window.location.hash || '#/';
  appContainer.innerHTML = `
    ${renderHeader()}
    ${resolveRoute(currentHash)}
    ${renderFooter()}
  `;

  if ((window as any).lucide) {
    (window as any).lucide.createIcons();
  }
}

window.addEventListener('hashchange', renderApp);
window.addEventListener('DOMContentLoaded', () => {
  store.subscribe(renderApp);
  renderApp();
});

(window as any).switchGalleryImage = (src: string, clickedBtn: HTMLElement) => {
  const mainImg = document.getElementById('main-product-image') as HTMLImageElement;
  if (mainImg) mainImg.src = src;

  const container = document.getElementById('gallery-thumbnails');
  if (container) {
    container.querySelectorAll('button').forEach(btn => {
      btn.className = 'w-18 h-18 rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all border-gray-200 hover:border-gray-400';
    });
    clickedBtn.className = 'w-18 h-18 rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all border-indigo-600 ring-2 ring-indigo-100';
  }
};