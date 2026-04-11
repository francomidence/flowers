import { Header, Footer } from '@/components/layout';
import { ProductCard } from '@/components/product';
import { getProductsByOccasion } from '@/lib/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Valentine's Day Flowers",
  description: 'Express your love with our premium red roses and romantic flower arrangements. Same-day delivery available.',
  openGraph: {
    title: "Valentine's Day Flowers - Romantic Bouquets",
    description: 'Express your love with premium red roses and romantic arrangements.',
  },
};

export default function ValentinesDayPage() {
  const products = getProductsByOccasion('valentines');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-cream via-clay-light/20 to-clay-dark/20 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="font-serif text-hero font-bold text-charcoal mb-4">
              Valentine's Day Flowers
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mb-8">
              Express your deepest feelings with luxurious red roses and romantic arrangements.
              Each bouquet is crafted to convey your love and affection.
            </p>
            <p className="text-gray-600">
              ✓ Same-day delivery available • ✓ Fresh guarantee • ✓ Romantic gift wrapping
            </p>
          </div>
        </section>

        {/* Why Roses Section */}
        <section className="bg-clay-light bg-opacity-10 py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Timeless Elegance
                </h3>
                <p className="text-gray-700">
                  Red roses are the universal symbol of love and romance for generations.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Premium Quality
                </h3>
                <p className="text-gray-700">
                  All our roses are imported from Ecuador, ensuring exceptional quality and longevity.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Perfect Every Time
                </h3>
                <p className="text-gray-700">
                  Our expert florists ensure each arrangement is a work of art.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-section">
          <h2 className="font-serif text-section-title font-bold text-charcoal mb-12">
            Our Valentine's Collection
          </h2>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} size="md" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Check back soon for our Valentine's Day collection.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
