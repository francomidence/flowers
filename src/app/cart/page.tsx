'use client';

import { Header, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { MOCK_PRODUCTS } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, isLoading, total } = useCart();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading cart...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const isEmpty = items.length === 0;
  const subtotal = total;
  const shipping = subtotal > 0 ? 9.99 : 0;
  const tax = subtotal * 0.08;
  const totalPrice = subtotal + shipping + tax;

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
          <span className="text-charcoal">Shopping Cart</span>
        </div>

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <h1 className="font-serif text-4xl font-bold text-charcoal mb-12">Shopping Cart</h1>

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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Browse our collection and find the perfect flowers.
              </p>
              <Link href="/">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="border-b border-gray-200 p-4 md:p-6">
                    <h2 className="font-semibold text-charcoal">
                      {items.length} {items.length === 1 ? 'Item' : 'Items'}
                    </h2>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {items.map((item) => {
                      const product = MOCK_PRODUCTS.find((p) => p.id === item.productId);
                      if (!product) return null;

                      return (
                        <div key={item.productId} className="p-4 md:p-6 flex gap-4">
                          {/* Image */}
                          <Link
                            href={`/products/${product.id}`}
                            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative"
                          >
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover rounded-lg"
                              sizes="128px"
                            />
                          </Link>

                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <Link href={`/products/${product.id}`}>
                              <h3 className="font-semibold text-charcoal hover:text-clay-dark mb-2">
                                {product.name}
                              </h3>
                            </Link>
                            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                            {/* Price & quantity */}
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-clay-dark">
                                ${(product.price * item.quantity).toFixed(2)}
                              </span>

                              {/* Quantity controls */}
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      item.productId,
                                      Math.max(1, item.quantity - 1)
                                    )
                                  }
                                  className="px-2 py-1 border border-gray-200 rounded hover:border-clay-light"
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>
                                <span className="w-8 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.productId, item.quantity + 1)
                                  }
                                  className="px-2 py-1 border border-gray-200 rounded hover:border-clay-light"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>

                              {/* Remove */}
                              <button
                                onClick={() => removeItem(item.productId)}
                                className="ml-4 text-red-600 hover:text-red-700 text-sm font-medium"
                                aria-label="Remove from cart"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Clear cart button */}
                  <div className="border-t border-gray-200 p-4 md:p-6">
                    <button
                      onClick={clearCart}
                      className="text-sm text-gray-600 hover:text-charcoal"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-cream rounded-lg p-6 sticky top-20">
                  <h2 className="font-semibold text-charcoal text-lg mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-bold text-charcoal">Total</span>
                      <span className="text-2xl font-bold text-terracotta">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    onClick={() => router.push('/checkout')}
                    className="w-full mb-3"
                  >
                    Proceed to Checkout
                  </Button>

                  <Link href="/">
                    <Button variant="outline" size="lg" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>

                  {/* Info */}
                  <div className="mt-6 space-y-2 text-xs text-gray-600">
                    <p>✓ Same-day delivery available</p>
                    <p>✓ Fresh guarantee</p>
                    <p>✓ Free returns</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
