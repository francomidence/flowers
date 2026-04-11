import { Header, Footer } from '@/components/layout';
import { Button, Card, CardImage, CardBody, Badge } from '@/components/ui';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-cream"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-sage opacity-40" />
          <div className="relative h-full flex items-end p-8 md:p-16">
            <div className="max-w-2xl">
              <h1
                id="hero-heading"
                className="font-serif text-hero font-bold text-charcoal mb-4"
              >
                Handcrafted Florals
              </h1>
              <p className="text-lg md:text-xl text-charcoal mb-8 max-w-lg leading-relaxed">
                Fresh, beautiful flower arrangements for every occasion. Same-day delivery
                available in select areas.
              </p>
              <Button size="lg">Shop Arrangements</Button>
            </div>
          </div>
        </section>

        {/* Featured Collections - Bento Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-section" aria-labelledby="featured-heading">
          <h2
            id="featured-heading"
            className="font-serif text-section-title font-bold text-charcoal mb-12"
          >
            Featured Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {/* Large featured item - portrait */}
            <div className="md:col-span-1 md:row-span-2">
              <Card hoverable>
                <CardImage
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=750&fit=crop"
                  alt="Red Roses Arrangement - Valentine's Day Special"
                  aspectRatio="portrait"
                  className="h-full"
                />
                <CardBody>
                  <Badge variant="primary" className="mb-2">
                    Valentine's Day
                  </Badge>
                  <h3 className="font-sans font-semibold text-lg text-charcoal">Red Roses</h3>
                  <p className="text-sm text-gray-600 mt-1">Premium dozen roses</p>
                </CardBody>
              </Card>
            </div>

            {/* Medium featured item - square */}
            <div className="md:col-span-1">
              <Card hoverable>
                <CardImage
                  src="https://images.unsplash.com/photo-1599599810694-b3d1d4088d5c?w=500&h=500&fit=crop"
                  alt="Mixed Spring Bouquet - Fresh Seasonal Flowers"
                  aspectRatio="square"
                  className="h-full"
                />
                <CardBody>
                  <Badge variant="sage" className="mb-2">
                    Spring
                  </Badge>
                  <h3 className="font-sans font-semibold text-lg text-charcoal">Mixed Bouquet</h3>
                  <p className="text-sm text-gray-600 mt-1">Seasonal favorites</p>
                </CardBody>
              </Card>
            </div>

            {/* Small featured item - landscape */}
            <div className="md:col-span-1">
              <Card hoverable>
                <CardImage
                  src="https://images.unsplash.com/photo-1594360499375-e71efb4b49c0?w=500&h=300&fit=crop"
                  alt="Sunflower & Lavender Arrangement - Cheerful Summer Bouquet"
                  aspectRatio="landscape"
                  className="h-full"
                />
                <CardBody>
                  <Badge variant="secondary" className="mb-2">
                    Summer
                  </Badge>
                  <h3 className="font-sans font-semibold text-lg text-charcoal">
                    Sunny Delight
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Bright & cheerful</p>
                </CardBody>
              </Card>
            </div>

            {/* Another landscape item */}
            <div className="md:col-span-2">
              <Card hoverable>
                <CardImage
                  src="https://images.unsplash.com/photo-1572813819207-335bfc4b9fb5?w=800&h=400&fit=crop"
                  alt="Premium White & Green Arrangement - Elegant Minimalist Design"
                  aspectRatio="landscape"
                  className="h-full"
                />
                <CardBody>
                  <Badge variant="sage" className="mb-2">
                    Minimalist
                  </Badge>
                  <h3 className="font-sans font-semibold text-xl text-charcoal">
                    Elegant Whites
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Sophisticated & timeless</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* Occasions Section */}
        <section className="bg-sage bg-opacity-10 py-section" aria-labelledby="occasions-heading">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2
              id="occasions-heading"
              className="font-serif text-section-title font-bold text-charcoal mb-12"
            >
              Shop by Occasion
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mother's Day",
                  description: 'Celebrate with beautiful florals',
                  icon: '🌷',
                },
                {
                  name: 'Wedding & Events',
                  description: 'Make your day unforgettable',
                  icon: '💐',
                },
                {
                  name: 'Sympathy & Care',
                  description: 'Thoughtful expressions of compassion',
                  icon: '🤍',
                },
              ].map((occasion) => (
                <div key={occasion.name} className="bg-white p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">{occasion.icon}</div>
                  <h3 className="font-sans font-semibold text-lg text-charcoal mb-2">
                    {occasion.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{occasion.description}</p>
                  <Button variant="outline" size="sm">
                    Explore
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-section" aria-labelledby="newsletter-heading">
          <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
            <h2
              id="newsletter-heading"
              className="font-serif text-section-title font-bold text-charcoal mb-4"
            >
              Never Miss an Offer
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for seasonal arrangements, care tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-button font-sans focus:outline-none focus:border-clay-light"
                aria-label="Email address"
              />
              <Button size="md">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
