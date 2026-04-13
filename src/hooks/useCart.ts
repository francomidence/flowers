'use client';

import { useState, useCallback, useEffect } from 'react';
import { MOCK_PRODUCTS } from '@/lib/api';

export interface CartItemData {
  productId: string;
  quantity: number;
  addedAt: string;
}

const STORAGE_KEY = 'loverflowers-cart';

export function useCart() {
  const [items, setItems] = useState<CartItemData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (error) {
      console.warn('Failed to load cart from localStorage');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoading]);

  const calculateTotal = useCallback((cartItems: CartItemData[]): number => {
    return cartItems.reduce((total, item) => {
      const product = MOCK_PRODUCTS.find((p) => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  }, []);

  const addItem = useCallback((productId: string, quantity: number = 1) => {
    setItems((prev) => {
      const existingItem = prev.find((i) => i.productId === productId);

      if (existingItem) {
        return prev.map((i) =>
          i.productId === productId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

      return [...prev, { productId, quantity, addedAt: new Date().toISOString() }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId ? { ...i, quantity } : i
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const total = calculateTotal(items);

  return {
    items,
    itemCount,
    total,
    isLoading,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
}
