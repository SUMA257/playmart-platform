export function renderFooter(): string {
  return `
    <footer class="bg-white border-t border-gray-200 mt-auto py-10">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2 text-xl font-bold text-indigo-600">
            <i data-lucide="shopping-bag" class="w-5 h-5"></i>
            <span>PlayMart</span>
          </div>
          <p class="text-xs text-gray-500 mt-3 leading-relaxed">
            Delivering authentic technology and home lifestyle essentials directly to doorsteps across India.
          </p>
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">Customer Service</h4>
          <ul class="space-y-2 text-xs text-gray-600">
            <li><a href="#/" class="hover:text-indigo-600">Return & Replacement Policy</a></li>
            <li><a href="#/" class="hover:text-indigo-600">GST Invoice Downloads</a></li>
            <li><a href="#/" class="hover:text-indigo-600">Shipping Rates & Pincodes</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">Payment Options</h4>
          <p class="text-xs text-gray-500 leading-relaxed">
            UPI (Google Pay, PhonePe, Paytm, BHIM), RuPay, Visa, Mastercard, NetBanking, and Cash on Delivery.
          </p>
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">Headquarters</h4>
          <p class="text-xs text-gray-500 leading-relaxed">
            PlayMart E-Commerce India Private Limited<br />
            Hitec City, Madhapur, Hyderabad - 500081, Telangana
          </p>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between text-xs text-gray-400">
        <p>&copy; 2026 PlayMart. All rights reserved.</p>
        <p>100% Indian Retail Compliance (18% GST Applicable)</p>
      </div>
    </footer>
  `;
}