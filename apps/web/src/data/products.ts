export interface Product {
  id: string;
  name: string;
  category: 'Electronics' | 'Audio' | 'Fashion' | 'Home';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  images: string[];
  description: string;
  specs: Record<string, string>;
  colors: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'pm-101',
    name: 'AcousticPro ANC Wireless Headphones',
    category: 'Audio',
    price: 4999,
    originalPrice: 8999,
    rating: 4.8,
    reviewsCount: 1420,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80'
    ],
    description: '45dB Hybrid Active Noise Cancelling with 60-hour playback, transparency mode, and ultra-comfortable protein memory foam earcups.',
    specs: { 'Battery Life': '60 Hours', 'Bluetooth': 'v5.3', 'Codec': 'LDAC, AAC', 'Warranty': '1 Year Domestic' },
    colors: ['Midnight Black', 'Matte Silver', 'Navy Blue']
  },
  {
    id: 'pm-102',
    name: 'Apex Mechanical Gasket Keyboard',
    category: 'Electronics',
    price: 2499,
    originalPrice: 4999,
    rating: 4.7,
    reviewsCount: 830,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80'
    ],
    description: 'Gasket-mounted hot-swappable tactile switch keyboard with factory lubed switches, polycarbonate plate, and southern-facing RGB.',
    specs: { 'Switches': 'Gateron Pro Yellow', 'Form Factor': '75% Compact', 'Connectivity': 'Tri-mode Wireless', 'Battery': '4000 mAh' },
    colors: ['Retro White', 'Carbon Gray']
  },
  {
    id: 'pm-103',
    name: 'ErgoComfort High-Back Mesh Chair',
    category: 'Home',
    price: 1099,
    originalPrice: 1999,
    rating: 4.6,
    reviewsCount: 512,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80'
    ],
    description: 'Engineered for 12+ hour sitting sessions with dynamic lumbar support, breathable Wintex Korean mesh, and Class 4 hydraulic piston.',
    specs: { 'Mechanism': 'Multi-tilt lock', 'Armrests': '4D Adjustable', 'Base': 'Heavy-duty Aluminum', 'Max Weight': '150 kg' },
    colors: ['Obsidian Black', 'Slate Gray']
  },
  {
    id: 'pm-104',
    name: 'Titan Horizon Smartwatch AMOLED',
    category: 'Fashion',
    price: 8999,
    originalPrice: 12999,
    rating: 4.9,
    reviewsCount: 2190,
    inStock: false,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'
    ],
    description: 'Aerospace-grade titanium chassis, sapphire crystal glass, 1.43-inch Always-On AMOLED screen with independent dual-band GPS.',
    specs: { 'Display': '1.43" AMOLED 466x466', 'Water Resistance': '5 ATM', 'Sensors': 'Optical HR, SpO2, ECG', 'Battery': 'Up to 14 Days' },
    colors: ['Titanium Silver', 'Space Black']
  }
];