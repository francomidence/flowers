import { Header, Footer } from '@/components/layout';
import { ProductCard } from '@/components/product';
import { getProductsByOccasion } from '@/lib/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sympathy & Memorial Flowers',
  description: 'Thoughtful flower arrangements to express condolences and respect during difficult times.',
  openGraph: {
    title: 'Sympathy & Memorial Flowers',
    description: 'Tasteful arrangements to honor and remember.',
  },
};

export default function SympathyPage() {
  const products = getProductsByOccasion('sympathy');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-cream via-sage/20 to-charcoal/10 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="font-serif text-hero font-bold text-charcoal mb-4">
              Sympathy & Remembrance
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mb-8">
              During times of loss, flowers offer a meaningful way to express sympathy and
              support. Our thoughtfully designed arrangements convey respect and compassion.
            </p>
            <p className="text-gray-600">
              ✓ Respectful design • ✓ Delivery to homes or services • ✓ Personalized cards
            </p>
          </div>
        </section>

        {/* Guidance Section */}
        <section className="bg-sage bg-opacity-10 py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-8">
              Expressing Sympathy Through Flowers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-charcoal mb-3">White & Light Flowers</h3>
                <p className="text-gray-700">
                  White lilies, roses, and chrysanthemums symbolize peace, innocence, and truth.
                  These are appropriate for most occasions and services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-3">Placement Options</h3>
                <p className="text-gray-700">
                  Arrangements can be sent to funeral homes, memorial services, family homes, or
                  graves. Let us know your preference when ordering.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-3">Timing Matters</h3>
                <p className="text-gray-700">
                  Send flowers as soon as you hear the news, or as a lasting tribute in the weeks
                  following. We offer same-day delivery for urgent orders.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-3">Personal Message</h3>
                <p className="text-gray-700">
                  Include a heartfelt message card. Our team will ensure your words are included
                  with your arrangement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-section">
          <h2 className="font-serif text-section-title font-bold text-charcoal mb-12">
            Sympathy Arrangements
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
                Our sympathy collection is available year-round.
              </p>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section className="bg-cream py-12">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">Need Help?</h2>
            <p className="text-gray-700 mb-6">
              Our team is available to help you select the perfect arrangement or answer any
              questions. Please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+1234567890"
                className="px-6 py-3 bg-clay-light text-charcoal font-semibold rounded-button hover:bg-clay-dark transition-colors"
              >
                Call Us
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-button hover:bg-charcoal hover:text-cream transition-colors"
              >
                Contact Online
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
