'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import { Header, Footer } from '@/components/layout';
import { ProductGallery, AddToCartModal } from '@/components/product';
import { Button, Badge } from '@/components/ui';
import { ProductCard } from '@/components/product/ProductCard';
import { StructuredData } from '@/components/common/StructuredData';
import { getProduct, getProductsByOccasion } from '@/lib/products';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { useCart } from '@/hooks/useCart';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = (params as unknown) as { id: string };
  const product = getProduct(id);
  const { addItem } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByOccasion(product.occasion[0]).filter(
    (p) => p.id !== id
  );

  const handleAddToCart = (quantity: number) => {
    setIsAddingToCart(true);
    // Simulate adding to cart
    setTimeout(() => {
      addItem(product.id, quantity);
      setIsAddingToCart(false);
    }, 300);
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://loverflowers.com' },
    { name: 'Products', url: 'https://loverflowers.com/products' },
    { name: product.name, url: `https://loverflowers.com/products/${product.id}` },
  ]);

  const productSchema = generateProductSchema(product);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 text-sm text-gray-600">
          <a href="/" className="hover:text-charcoal">
            Home
          </a>
          {' / '}
          <a href="/products" className="hover:text-charcoal">
            Products
          </a>
          {' / '}
          <span className="text-charcoal">{product.name}</span>
        </div>

        {/* Product detail section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Gallery */}
            <div>
              <ProductGallery images={product.images} alt={product.name} />
            </div>

            {/* Details */}
            <div>
              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(product.rating!) ? 'text-yellow-500' : 'text-gray-300'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-charcoal font-medium">{product.rating}</span>
                  <span className="text-gray-600 text-sm">({product.reviews} reviews)</span>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

              {/* Occasions */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-charcoal mb-3">Perfect for:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.occasion.map((occ) => (
                    <Badge key={occ} variant="sage">
                      {occ.replace('-', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="bg-cream p-6 rounded-lg mb-8 space-y-4">
                <h3 className="font-medium text-charcoal mb-4">Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {product.stems && (
                    <div>
                      <span className="text-gray-600">Stem Count</span>
                      <p className="font-semibold text-charcoal">{product.stems}</p>
                    </div>
                  )}
                  {product.height && (
                    <div>
                      <span className="text-gray-600">Height</span>
                      <p className="font-semibold text-charcoal">{product.height}</p>
                    </div>
                  )}
                  {product.vaseType && (
                    <div className="col-span-2">
                      <span className="text-gray-600">Vase</span>
                      <p className="font-semibold text-charcoal">{product.vaseType}</p>
                    </div>
                  )}
                  {product.freshnessDays && (
                    <div>
                      <span className="text-gray-600">Stays Fresh</span>
                      <p className="font-semibold text-charcoal">Up to {product.freshnessDays} days</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="sticky bottom-0 md:sticky md:bottom-auto bg-white md:bg-transparent p-4 md:p-0 border-t md:border-t-0 md:mb-8">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold text-clay-dark">${product.price}</span>
                  {!product.inStock && (
                    <span className="text-red-600 font-medium">Out of stock</span>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    disabled={!product.inStock}
                    className="flex-1"
                  >
                    Add to Cart
                  </Button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="px-4 py-3 border-2 border-sage rounded-button hover:bg-sage hover:bg-opacity-10 transition-colors"
                    aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <svg
                      className={`w-6 h-6 ${isWishlisted ? 'fill-sage text-sage' : 'text-sage'}`}
                      fill={isWishlisted ? 'currentColor' : 'none'}
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
                  </button>
                </div>

                <p className="text-sm text-gray-600 mt-4 text-center md:text-left">
                  ✓ Same-day delivery available • ✓ Fresh guarantee
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="bg-sage bg-opacity-10 py-section">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="font-serif text-section-title font-bold text-charcoal mb-8">
                You might also like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.slice(0, 3).map((p) => (
                  <ProductCard key={p.id} product={p} size="sm" />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Add to Cart Modal */}
      <AddToCartModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
        isAdding={isAddingToCart}
      />

      <Footer />
    </div>
  );
}
