'use client';

import React, { useState } from 'react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui';

interface AddToCartModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (quantity: number) => void;
  isAdding?: boolean;
}

export function AddToCartModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  isAdding = false,
}: AddToCartModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(quantity);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-cream rounded-lg max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            {showSuccess ? 'Added to Cart!' : 'Add to Cart'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-charcoal transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {showSuccess ? (
            <div className="text-center">
              <div className="w-12 h-12 bg-sage bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-sage"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-charcoal mb-4">
                {quantity} × {product.name} added to your cart
              </p>
              <p className="text-sm text-gray-600">
                Subtotal: <span className="font-bold text-clay-dark">${(product.price * quantity).toFixed(2)}</span>
              </p>
            </div>
          ) : (
            <>
              {/* Product info */}
              <div className="mb-6">
                <h3 className="font-serif font-bold text-xl text-charcoal mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Product details */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                  {product.stems && (
                    <p>
                      <span className="font-medium text-charcoal">Stems:</span>{' '}
                      {product.stems}
                    </p>
                  )}
                  {product.height && (
                    <p>
                      <span className="font-medium text-charcoal">Height:</span>{' '}
                      {product.height}
                    </p>
                  )}
                  {product.vaseType && (
                    <p>
                      <span className="font-medium text-charcoal">Vase:</span>{' '}
                      {product.vaseType}
                    </p>
                  )}
                  {product.freshnessDays && (
                    <p>
                      <span className="font-medium text-charcoal">Freshness:</span> Up to{' '}
                      {product.freshnessDays} days
                    </p>
                  )}
                </div>
              </div>

              {/* Quantity selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-charcoal mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border-2 border-gray-200 rounded-button hover:border-clay-light transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 px-3 py-2 text-center border-2 border-gray-200 rounded-button focus:outline-none focus:border-clay-light"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border-2 border-gray-200 rounded-button hover:border-clay-light transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 p-4 bg-clay-light bg-opacity-10 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal font-medium">Subtotal:</span>
                  <span className="text-2xl font-bold text-clay-dark">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={isAdding || !product.inStock}
                  className="w-full"
                >
                  {isAdding ? 'Adding...' : 'Add to Cart'}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onClose}
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
