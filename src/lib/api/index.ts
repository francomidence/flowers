/**
 * API Client Exports
 */

export {
  getProducts,
  getProductById,
  getProductsByCategory,
  getProductsByOccasion,
  getFeaturedProducts,
  searchProducts,
  type ProductFilters,
  type ProductResponse,
} from './products';

export { MOCK_PRODUCTS, type Product, type CartItem, type WishlistItem, delay } from './mockData';
