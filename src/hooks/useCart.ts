'use client';

import { useState, useCallback, useEffect } from 'react';
import { CartItem, Cart } from '@/lib/types';
import { getProduct } from '@/lib/products';

const STORAGE_KEY = 'loverflowers-cart';

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load cart', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isLoading]);

  const calculateTotal = useCallback((items: CartItem[]) => {
    return items.reduce((total, item) => {
      const product = getProduct(item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  }, []);

  const addItem = useCallback(
    (productId: string, quantity: number = 1) => {
      setCart((prev) => {
        const existingItem = prev.items.find((i) => i.productId === productId);
        let newItems;

        if (existingItem) {
          newItems = prev.items.map((i) =>
            i.productId === productId
              ? { ...i, quantity: i.quantity + quantity }
              : i
          );
        } else {
          newItems = [...prev.items, { productId, quantity, addedAt: new Date() }];
        }

        return {
          items: newItems,
          total: calculateTotal(newItems),
        };
      });
    },
    [calculateTotal]
  );

  const removeItem = useCallback((productId: string) => {
    setCart((prev) => {
      const newItems = prev.items.filter((i) => i.productId !== productId);
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    });
  }, [calculateTotal]);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId);
        return;
      }

      setCart((prev) => {
        const newItems = prev.items.map((i) =>
          i.productId === productId ? { ...i, quantity } : i
        );
        return {
          items: newItems,
          total: calculateTotal(newItems),
        };
      });
    },
    [calculateTotal, removeItem]
  );

  const clearCart = useCallback(() => {
    setCart({ items: [], total: 0 });
  }, []);

  const itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);

  return {
    cart,
    itemCount,
    isLoading,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
}
