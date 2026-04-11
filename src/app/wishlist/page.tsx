'use client';

import { Header, Footer } from '@/components/layout';
import { ProductCard } from '@/components/product';
import { Button } from '@/components/ui';
import { useWishlist } from '@/hooks/useWishlist';
import { getProduct } from '@/lib/products';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, isLoading, clearWishlist } = useWishlist();

  const wishlistProducts = wishlist
    .map((id) => getProduct(id))
    .filter((p) => p !== undefined);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading wishlist...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const isEmpty = wishlistProducts.length === 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-charcoal">
            Home
          </Link>
          {' / '}
          <span className="text-charcoal">Wishlist</span>
        </div>

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="flex items-center justify-between mb-12">
            <h1 className="font-serif text-4xl font-bold text-charcoal">My Wishlist</h1>
            {!isEmpty && (
              <button
                onClick={clearWishlist}
                className="text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>

          {isEmpty ? (
            <div className="text-center py-12">
              <svg
                className="w-24 h-24 mx-auto text-gray-300 mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Your wishlist is empty</h2>
              <p className="text-gray-600 mb-8">
                Save your favorite arrangements to view them later.
              </p>
              <Link href="/occasions">
                <Button>Browse Flowers</Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {wishlistProducts.map((product) => (
                  <ProductCard key={product.id} product={product} size="md" />
                ))}
              </div>

              {/* Suggestions */}
              <div className="bg-cream rounded-lg p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                  Save for Later
                </h3>
                <p className="text-gray-700 mb-6">
                  Your wishlist is saved locally in your browser. Share it with friends or come
                  back anytime to purchase.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/occasions">
                    <Button variant="outline">Explore More</Button>
                  </Link>
                  <Link href="/cart">
                    <Button>View Cart</Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
