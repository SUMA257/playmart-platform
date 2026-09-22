import { store } from '../state/store';

export function renderAccount(): string {
  return `
    <main class="flex-1 max-w-4xl mx-auto px-4 py-8 w-full animate-fade-in space-y-6">
      <h1 class="text-2xl font-black text-gray-900">Account Profile</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white border rounded-xl p-6 space-y-4">
          <div class="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl">
            ${store.address.fullName.charAt(0)}
          </div>
          <div>
            <h3 class="font-bold text-gray-900 text-base">${store.address.fullName}</h3>
            <p class="text-xs text-gray-500">${store.address.mobile}</p>
          </div>
          <button class="w-full text-xs font-semibold border rounded-lg py-2 hover:bg-gray-50">Edit Profile</button>
        </div>

        <div class="md:col-span-2 bg-white border rounded-xl p-6 space-y-4">
          <h2 class="font-bold text-base text-gray-900">Default Shipping Address</h2>
          <div class="text-xs text-gray-600 leading-relaxed">
            <p class="font-semibold text-gray-900">${store.address.fullName}</p>
            <p>${store.address.street}</p>
            <p>${store.address.city}, ${store.address.state} - ${store.address.pincode}</p>
            <p class="mt-2 text-gray-500">Mobile: ${store.address.mobile}</p>
          </div>
        </div>
      </div>
    </main>
  `;
}