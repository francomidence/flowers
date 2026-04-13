/**
 * Products API Client
 * Provides product data with mock responses for development
 */

import { MOCK_PRODUCTS, delay, type Product } from './mockData';

export interface ProductFilters {
  category?: string;
  occasion?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
}

export interface ProductResponse {
  products: Product[];
  total: number;
}

/**
 * Fetch all products with optional filters
 */
export async function getProducts(filters?: ProductFilters): Promise<ProductResponse> {
  // Simulate network delay
  await delay();

  let filtered = [...MOCK_PRODUCTS];

  if (filters) {
    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }
    if (filters.occasion) {
      filtered = filtered.filter((p) => p.occasion === filters.occasion);
    }
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
    }
    if (filters.inStock !== undefined) {
      filtered = filtered.filter((p) => p.inStock === filters.inStock);
    }
  }

  return {
    products: filtered,
    total: filtered.length,
  };
}

/**
 * Fetch a single product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  // Simulate network delay
  await delay();

  const product = MOCK_PRODUCTS.find((p) => p.id === id);
  return product || null;
}

/**
 * Fetch products by category
 */
export async function getProductsByCategory(category: string): Promise<ProductResponse> {
  return getProducts({ category });
}

/**
 * Fetch products by occasion
 */
export async function getProductsByOccasion(occasion: string): Promise<ProductResponse> {
  return getProducts({ occasion });
}

/**
 * Get featured products (top-rated)
 */
export async function getFeaturedProducts(): Promise<ProductResponse> {
  // Simulate network delay
  await delay();

  const featured = MOCK_PRODUCTS.sort((a, b) => b.rating - a.rating).slice(0, 4);

  return {
    products: featured,
    total: featured.length,
  };
}

/**
 * Search products by name or description
 */
export async function searchProducts(query: string): Promise<ProductResponse> {
  // Simulate network delay
  await delay();

  const lowerQuery = query.toLowerCase();
  const results = MOCK_PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );

  return {
    products: results,
    total: results.length,
  };
}
