import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Red Roses Dozen',
    description: 'Premium long-stem red roses, perfect for expressing love and admiration. Sourced from our finest growers.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=750&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1584704032706-e5ef23d1a1f6?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1587899897435-fc73ce45b6b9?w=800&h=1200&fit=crop',
    ],
    category: 'roses',
    occasion: ['valentines', 'anniversary', 'romantic'],
    stems: 12,
    height: '24-26 inches',
    vaseType: 'Elegant clear glass vase',
    freshnessDays: 7,
    inStock: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Mixed Spring Bouquet',
    description: 'Vibrant mix of seasonal flowers including tulips, daffodils, and fresh greenery.',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1599599810694-b3d1d4088d5c?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1599599810694-b3d1d4088d5c?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1562349619474-d1cd83fcf5b5?w=800&h=800&fit=crop',
    ],
    category: 'bouquets',
    occasion: ['mothers-day', 'spring', 'celebration'],
    stems: 15,
    height: '18-20 inches',
    vaseType: 'Ceramic vase included',
    freshnessDays: 6,
    inStock: true,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Sunny Delight',
    description: 'Cheerful sunflowers and lavender arrangement, bringing warmth and joy to any space.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1594360499375-e71efb4b49c0?w=500&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594360499375-e71efb4b49c0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593160072900-7fa1b683da6d?w=800&h=600&fit=crop',
    ],
    category: 'seasonal',
    occasion: ['birthday', 'congratulations', 'summer'],
    stems: 10,
    height: '16-18 inches',
    vaseType: 'Glass vase included',
    freshnessDays: 8,
    inStock: true,
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '4',
    name: 'Elegant Whites',
    description: 'Sophisticated white roses and green hydrangeas with premium greenery. A timeless classic.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572813819207-335bfc4b9fb5?w=800&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572813819207-335bfc4b9fb5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    ],
    category: 'premium',
    occasion: ['wedding', 'anniversary', 'sympathy'],
    stems: 20,
    height: '24 inches',
    vaseType: 'Premium crystal vase',
    freshnessDays: 9,
    inStock: true,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: '5',
    name: "Mother's Day Special",
    description: 'Pink roses, carnations, and lilies arranged to celebrate the special mom in your life.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec6a?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564399579883-451a5d44ec6a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=800&fit=crop',
    ],
    category: 'bouquets',
    occasion: ['mothers-day', 'celebration'],
    stems: 18,
    height: '20-22 inches',
    vaseType: 'Beautiful ceramic vase',
    freshnessDays: 7,
    inStock: true,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: '6',
    name: 'Sympathy & Peace',
    description: 'Gentle white lilies and roses arranged with peaceful greenery. A respectful tribute.',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568016174407-66bba843d6d7?w=800&h=800&fit=crop',
    ],
    category: 'premium',
    occasion: ['sympathy', 'condolences'],
    stems: 16,
    height: '22 inches',
    vaseType: 'Elegant white vase',
    freshnessDays: 8,
    inStock: true,
    rating: 4.7,
    reviews: 92,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByOccasion(occasion: string): Product[] {
  return products.filter((p) => p.occasion.includes(occasion));
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
