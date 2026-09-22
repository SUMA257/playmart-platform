import { Product, PRODUCTS } from '../data/products';
import { computeGST, calculateShipping } from '../utils/tax';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface ShippingAddress {
  fullName: string;
  mobile: string;
  pincode: string;
  city: string;
  state: string;
  street: string;
}

class Store {
  public cart: CartItem[] = [];
  public wishlist: string[] = [];
  public currentCoupon: string | null = null;
  public isExpressDelivery: boolean = false;
  public address: ShippingAddress = {
    fullName: 'Arun Varma',
    mobile: '9876543210',
    pincode: '500081',
    city: 'Hyderabad',
    state: 'Telangana',
    street: 'Plot 42, Hitec City, Madhapur'
  };

  addToCart(productId: string, color?: string, qty: number = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const chosenColor = color || product.colors[0] || 'Default';
    const existing = this.cart.find(i => i.product.id === productId && i.selectedColor === chosenColor);

    if (existing) {
      existing.quantity += qty;
    } else {
      this.cart.push({ product, quantity: qty, selectedColor: chosenColor });
    }
    this.notify();
  }

  updateQuantity(productId: string, color: string, delta: number) {
    const item = this.cart.find(i => i.product.id === productId && i.selectedColor === color);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => !(i.product.id === productId && i.selectedColor === color));
    }
    this.notify();
  }

  removeItem(productId: string, color: string) {
    this.cart = this.cart.filter(i => !(i.product.id === productId && i.selectedColor === color));
    this.notify();
  }

  applyCoupon(code: string): { success: boolean; message: string } {
    const normalized = code.trim().toUpperCase();
    if (normalized === 'FESTIVE20') {
      this.currentCoupon = 'FESTIVE20';
      this.notify();
      return { success: true, message: 'FESTIVE20 applied! 20% discount granted.' };
    }
    if (normalized === 'WELCOME100') {
      this.currentCoupon = 'WELCOME100';
      this.notify();
      return { success: true, message: 'WELCOME100 applied! Flat ₹100 discount granted.' };
    }
    return { success: false, message: 'Invalid coupon code.' };
  }

  removeCoupon() {
    this.currentCoupon = null;
    this.notify();
  }

  setExpressDelivery(enabled: boolean) {
    this.isExpressDelivery = enabled;
    this.notify();
  }

  getSubtotal(): number {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  getDiscount(): number {
    const subtotal = this.getSubtotal();
    if (this.currentCoupon === 'FESTIVE20') return Math.round(subtotal * 0.20);
    if (this.currentCoupon === 'WELCOME100') return Math.min(100, subtotal);
    return 0;
  }

  getTax(): number {
    const taxableSubtotal = Math.max(0, this.getSubtotal() - this.getDiscount());
    return computeGST(taxableSubtotal);
  }

  getShippingFee(): number {
    return calculateShipping(this.getSubtotal(), this.isExpressDelivery);
  }

  getTotal(): number {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal - this.getDiscount() + this.getTax() + this.getShippingFee();
  }

  clearCart() {
    this.cart = [];
    this.currentCoupon = null;
    this.isExpressDelivery = false;
    this.notify();
  }

  private listeners: Array<() => void> = [];
  subscribe(fn: () => void) { this.listeners.push(fn); }
  private notify() { this.listeners.forEach(fn => fn()); }
}

export const store = new Store();