'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

export function Header() {
  const { itemCount: cartCount, isLoading: cartLoading } = useCart();
  const { count: wishlistCount, isLoading: wishlistLoading } = useWishlist();

  return (
    <header className="sticky top-0 z-50 bg-clay border-b border-tonal-mid">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-heading-md font-serif font-bold text-charcoal hover:text-terracotta transition-colors" aria-label="Loverflowers home">
            Loverflowers
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-xl" aria-label="Main navigation">
            <Link
              href="/products"
              className="text-body text-charcoal hover:text-terracotta transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/occasions"
              className="text-body text-charcoal hover:text-terracotta transition-colors"
            >
              Occasions
            </Link>
            <Link
              href="/about"
              className="text-body text-charcoal hover:text-terracotta transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-body text-charcoal hover:text-terracotta transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-md">
            <button
              aria-label="Search products"
              className="p-md hover:bg-tonal-light rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta"
            >
              <svg
                className="w-5 h-5 text-charcoal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="p-md hover:bg-tonal-light rounded-md transition-colors relative focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta"
              aria-label={`Wishlist${wishlistCount > 0 ? ` (${wishlistCount} items)` : ''}`}
            >
              <svg
                className="w-5 h-5 text-charcoal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {wishlistCount > 0 && !wishlistLoading && (
                <span className="absolute top-1 right-1 bg-terracotta text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping cart */}
            <Link
              href="/cart"
              className="p-md hover:bg-tonal-light rounded-md transition-colors relative focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta"
              aria-label={`Shopping cart${cartCount > 0 ? ` (${cartCount} items)` : ''}`}
            >
              <svg
                className="w-5 h-5 text-charcoal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && !cartLoading && (
                <span className="absolute top-1 right-1 bg-terracotta text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
