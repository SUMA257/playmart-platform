import { renderHome } from '../pages/Home';
import { renderProductListing } from '../pages/ProductListing';
import { renderProductDetails } from '../pages/ProductDetails';
import { renderCart } from '../pages/Cart';
import { renderCheckout } from '../pages/Checkout';
import { renderOrderConfirmation } from '../pages/OrderConfirmation';
import { renderAccount } from '../pages/Account';

export function resolveRoute(hash: string): string {
  const [path, queryStr] = hash.replace(/^#/, '').split('?');
  const params = new URLSearchParams(queryStr || '');

  switch (path) {
    case '':
    case '/':
      return renderHome();
    case '/products':
      return renderProductListing(params.get('q') || undefined, params.get('cat') || undefined);
    case '/product':
      return renderProductDetails(params.get('id') || '');
    case '/cart':
      return renderCart();
    case '/checkout':
      return renderCheckout();
    case '/confirmed':
      return renderOrderConfirmation();
    case '/account':
      return renderAccount();
    default:
      return renderHome();
  }
}