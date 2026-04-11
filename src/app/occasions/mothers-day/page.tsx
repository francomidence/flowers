import { Header, Footer } from '@/components/layout';
import { ProductCard } from '@/components/product';
import { getProductsByOccasion } from '@/lib/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mother's Day Flowers",
  description: 'Beautiful flower arrangements to celebrate the special moms in your life. Same-day delivery available.',
  openGraph: {
    title: "Mother's Day Flowers",
    description: 'Beautiful flower arrangements to celebrate the special moms in your life.',
  },
};

export default function MothersDayPage() {
  const products = getProductsByOccasion('mothers-day');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-cream via-cream to-sage py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="font-serif text-hero font-bold text-charcoal mb-4">
              Mother's Day Flowers
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mb-8">
              Celebrate the special moms in your life with our carefully curated collection of
              fresh, beautiful arrangements. Each bouquet is designed to show your love and
              appreciation.
            </p>
            <p className="text-gray-600">
              ✓ Same-day delivery available • ✓ Fresh guarantee • ✓ Beautiful gift wrapping included
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-sage bg-opacity-10 py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Premium Selection
                </h3>
                <p className="text-gray-700">
                  Handpicked flowers sourced from our best growers to ensure exceptional quality.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Expert Arrangement
                </h3>
                <p className="text-gray-700">
                  Each bouquet is arranged by skilled florists with years of experience.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  Fast Delivery
                </h3>
                <p className="text-gray-700">
                  Same-day delivery available for orders placed before 2 PM in select areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-section">
          <h2 className="font-serif text-section-title font-bold text-charcoal mb-12">
            Our Collection
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
                No products available for this occasion at the moment.
              </p>
            </div>
          )}
        </section>

        {/* Tips Section */}
        <section className="bg-cream py-section">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="font-serif text-section-title font-bold text-charcoal mb-8 text-center">
              Flower Care Tips
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Fresh Water</h3>
                <p className="text-gray-700">
                  Change the water every 2-3 days and trim the stems at an angle with a sharp knife.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Proper Placement</h3>
                <p className="text-gray-700">
                  Keep flowers away from direct sunlight, heat sources, and ripening fruit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Remove Lower Leaves</h3>
                <p className="text-gray-700">
                  Remove leaves that would sit below the waterline to prevent bacterial growth.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Food Packets</h3>
                <p className="text-gray-700">
                  Use the flower food packet included with your arrangement for optimal freshness.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
