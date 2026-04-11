import { Product } from './types';

// Using Picsum (reliable placeholder) + descriptive IDs for flower types
export const products: Product[] = [
  {
    id: '1',
    name: 'Red Roses Dozen',
    description: 'Premium long-stem red roses, perfect for expressing love and admiration. Sourced from our finest growers.',
    price: 69.99,
    image: 'https://picsum.photos/500/750?random=1',
    images: [
      'https://picsum.photos/800/1200?random=1',
      'https://picsum.photos/800/1200?random=2',
      'https://picsum.photos/800/1200?random=3',
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
    image: 'https://picsum.photos/500/500?random=4',
    images: [
      'https://picsum.photos/800/800?random=4',
      'https://picsum.photos/800/800?random=5',
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
    image: 'https://picsum.photos/500/300?random=6',
    images: [
      'https://picsum.photos/800/600?random=6',
      'https://picsum.photos/800/600?random=7',
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
    image: 'https://picsum.photos/500/300?random=8',
    images: [
      'https://picsum.photos/800/600?random=8',
      'https://picsum.photos/800/600?random=9',
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
    image: 'https://picsum.photos/500/500?random=10',
    images: [
      'https://picsum.photos/800/800?random=10',
      'https://picsum.photos/800/800?random=11',
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
    image: 'https://picsum.photos/500/500?random=12',
    images: [
      'https://picsum.photos/800/800?random=12',
      'https://picsum.photos/800/800?random=13',
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
