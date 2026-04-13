/**
 * Mock API Data
 * Static data for development and demonstration
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  occasion?: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Red Roses Bouquet',
    description: 'Premium dozen red roses with eucalyptus',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=500&fit=crop',
    category: 'Roses',
    occasion: 'Valentine\'s Day',
    inStock: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Spring Mixed Bouquet',
    description: 'Fresh seasonal flowers with greenery',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1599599810694-b3d1d4088d5c?w=500&h=500&fit=crop',
    category: 'Mixed',
    occasion: 'Spring',
    inStock: true,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Sunny Delight',
    description: 'Bright sunflowers and lavender arrangement',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1594360499375-e71efb4b49c0?w=500&h=500&fit=crop',
    category: 'Sunflowers',
    occasion: 'Summer',
    inStock: true,
    rating: 4.7,
    reviews: 56,
  },
  {
    id: '4',
    name: 'Elegant Whites',
    description: 'White roses and greenery minimalist design',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1572813819207-335bfc4b9fb5?w=500&h=500&fit=crop',
    category: 'Roses',
    inStock: true,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: '5',
    name: 'Sunset Gradient',
    description: 'Orange and pink gradient arrangement',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    category: 'Mixed',
    occasion: 'Birthday',
    inStock: true,
    rating: 4.5,
    reviews: 72,
  },
  {
    id: '6',
    name: 'Peony Paradise',
    description: 'Luxurious peonies in full bloom',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1582794543139-a86c810be5d0?w=500&h=500&fit=crop',
    category: 'Peonies',
    inStock: true,
    rating: 4.9,
    reviews: 118,
  },
];

export interface CartItem {
  productId: string;
  quantity: number;
  addedAt: string;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

// Simulate delays to make the API feel more realistic
export const API_DELAY = 300; // milliseconds

export async function delay(ms: number = API_DELAY) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
