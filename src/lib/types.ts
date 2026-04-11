export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: 'roses' | 'bouquets' | 'seasonal' | 'premium';
  occasion: string[];
  stems?: number;
  height?: string;
  vaseType?: string;
  freshnessDays?: number;
  inStock: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
