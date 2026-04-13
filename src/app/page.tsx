import { Header, Footer } from '@/components/layout';
import { Button, Input } from '@/components/ui';
import { Hero, FeaturedGrid, EditorialBlock, SubscriptionCTA } from '@/components/surfaces';
import type { GridItem, SubscriptionPlan } from '@/components/surfaces';

const featuredItems: GridItem[] = [
  {
    id: '1',
    title: 'Red Roses',
    badge: "Valentine's",
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=750&fit=crop',
    aspectRatio: 'portrait',
    imageWidth: 500,
    imageHeight: 750,
  },
  {
    id: '2',
    title: 'Mixed Bouquet',
    badge: 'Spring',
    image: 'https://images.unsplash.com/photo-1599599810694-b3d1d4088d5c?w=500&h=500&fit=crop',
    aspectRatio: 'square',
    imageWidth: 500,
    imageHeight: 500,
  },
  {
    id: '3',
    title: 'Sunny Delight',
    badge: 'Summer',
    image: 'https://images.unsplash.com/photo-1594360499375-e71efb4b49c0?w=500&h=300&fit=crop',
    aspectRatio: 'landscape',
    imageWidth: 500,
    imageHeight: 300,
  },
  {
    id: '4',
    title: 'Elegant Whites',
    badge: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1572813819207-335bfc4b9fb5?w=800&h=400&fit=crop',
    aspectRatio: 'landscape',
    imageWidth: 800,
    imageHeight: 400,
  },
];

const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: 'Weekly',
    price: '$35',
    period: 'week',
    features: ['Fresh weekly arrangement', 'Free delivery', 'Cancel anytime'],
  },
  {
    name: 'Monthly',
    price: '$99',
    period: 'month',
    features: ['4 arrangements/month', 'Premium selection', 'Priority access'],
    highlighted: true,
  },
  {
    name: 'Seasonal',
    price: '$249',
    period: 'season',
    features: ['Quarterly exclusive bundles', 'Rare flowers', 'White glove service'],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-clay">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          headline="The Art of Unruly Blooms"
          subheading="Handcrafted arrangements celebrating the natural beauty of living flowers. Fresh, vibrant, and delivered with care."
          imageUrl="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=700&fit=crop"
          imageAlt="Vibrant floral arrangement with roses and eucalyptus"
          layout="right"
          cta={{ text: 'Explore Collection', href: '/products' }}
          imageWidth={600}
          imageHeight={700}
        />

        {/* Featured Collections Grid */}
        <section className="bg-white py-section md:py-sectionLarge">
          <div className="max-w-7xl mx-auto px-gutter mb-section">
            <h2 className="text-heading-lg text-charcoal font-serif">Featured Collections</h2>
          </div>
          <FeaturedGrid items={featuredItems} variant="asymmetric" />
        </section>

        {/* Editorial Block */}
        <EditorialBlock
          title="The Artisan's Bundles"
          description="Curated selections from our master florists, each bundle tells a story of craft and passion."
          imageUrl="https://images.unsplash.com/photo-1572813819207-335bfc4b9fb5?w=500&h=600&fit=crop"
          imageAlt="Close-up of artisanal flower arrangement"
          imagePosition="left"
          imageWidth={500}
          imageHeight={600}
          content={
            <div>
              <p className="text-body-sm text-charcoal mb-lg">
                Each bundle is thoughtfully composed to balance color, texture, and form.
              </p>
              <Button size="sm">View All Bundles</Button>
            </div>
          }
        />

        {/* Subscriptions CTA */}
        <SubscriptionCTA
          title="Curated Subscriptions"
          subtitle="Receive fresh arrangements delivered every week, month, or season."
          plans={subscriptionPlans}
        />

        {/* Newsletter */}
        <section className="py-section md:py-sectionLarge bg-gradient-clay" aria-labelledby="newsletter-heading">
          <div className="max-w-2xl mx-auto px-gutter text-center">
            <h2
              id="newsletter-heading"
              className="font-serif text-heading-lg text-charcoal mb-lg"
            >
              Never Miss an Offer
            </h2>
            <p className="text-body text-text-secondary mb-xl">
              Subscribe to our newsletter for seasonal arrangements, care tips, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                aria-label="Email address"
                required
              />
              <Button size="md" className="flex-shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
