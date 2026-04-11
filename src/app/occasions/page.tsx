import { Header, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import Link from 'next/link';

const occasions = [
  {
    id: 'valentines',
    name: "Valentine's Day",
    description: 'Express your love with stunning red roses and romantic arrangements.',
    emoji: '❤️',
    href: '/occasions/valentines',
  },
  {
    id: 'mothers-day',
    name: "Mother's Day",
    description: 'Celebrate the special moms in your life with beautiful floral tributes.',
    emoji: '💐',
    href: '/occasions/mothers-day',
  },
  {
    id: 'wedding',
    name: 'Wedding & Events',
    description: 'Premium arrangements for your special day. Custom designs available.',
    emoji: '💍',
    href: '/occasions/wedding',
  },
  {
    id: 'sympathy',
    name: 'Sympathy & Remembrance',
    description: 'Thoughtful expressions of compassion and respect.',
    emoji: '🤍',
    href: '/occasions/sympathy',
  },
  {
    id: 'birthday',
    name: 'Birthday',
    description: 'Bright and cheerful arrangements to celebrate special moments.',
    emoji: '🎉',
    href: '/occasions/birthday',
  },
  {
    id: 'congratulations',
    name: 'Congratulations',
    description: 'Perfect for celebrating achievements and milestones.',
    emoji: '🌟',
    href: '/occasions/congratulations',
  },
];

export default function OccasionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="font-serif text-hero font-bold text-charcoal mb-4">
              Shop by Occasion
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Every moment deserves the perfect flowers. Browse arrangements designed for
              specific occasions, or let us help you create something custom.
            </p>
          </div>
        </section>

        {/* Occasions Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {occasions.map((occasion) => (
              <Link key={occasion.id} href={occasion.href}>
                <div className="bg-white border-2 border-gray-200 hover:border-clay-light rounded-lg p-8 transition-all hover:shadow-lg h-full">
                  <div className="text-5xl mb-4">{occasion.emoji}</div>
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">
                    {occasion.name}
                  </h2>
                  <p className="text-gray-700 mb-6">{occasion.description}</p>
                  <Button variant="outline" size="sm">
                    Browse Collection →
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
