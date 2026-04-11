'use client';

import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'loverflowers-wishlist';

export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load wishlist', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    }
  }, [wishlist, isLoading]);

  const addItem = useCallback((productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) return prev;
      return [...prev, productId];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  }, []);

  const toggleItem = useCallback((productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist]
  );

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);

  return {
    wishlist,
    isLoading,
    addItem,
    removeItem,
    toggleItem,
    isWishlisted,
    clearWishlist,
    count: wishlist.length,
  };
}
