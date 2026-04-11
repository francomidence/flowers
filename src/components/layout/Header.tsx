'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

export function Header() {
  const { itemCount: cartCount, isLoading: cartLoading } = useCart();
  const { count: wishlistCount, isLoading: wishlistLoading } = useWishlist();

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif font-bold text-charcoal">
              Loverflowers
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/occasions"
              className="text-charcoal hover:text-clay-dark transition-colors"
            >
              Occasions
            </Link>
            <Link
              href="/about"
              className="text-charcoal hover:text-clay-dark transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-charcoal hover:text-clay-dark transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="p-2 hover:bg-clay-light hover:bg-opacity-10 rounded-button transition-colors"
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
              className="p-2 hover:bg-sage hover:bg-opacity-10 rounded-button transition-colors relative"
              aria-label="Wishlist"
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
                <span className="absolute top-1 right-1 bg-sage text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping cart */}
            <Link
              href="/cart"
              className="p-2 hover:bg-clay-light hover:bg-opacity-10 rounded-button transition-colors relative"
              aria-label="Shopping cart"
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
                <span className="absolute top-1 right-1 bg-clay-dark text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
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
