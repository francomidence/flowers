import { Header, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function OrderConfirmationPage() {
  const orderId = `LF-${Date.now()}`;
  const orderDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-4 md:px-8 py-16">
          {/* Success message */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-sage bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-sage"
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

            <h1 className="font-serif text-4xl font-bold text-charcoal mb-4">
              Order Confirmed!
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              Thank you for your order. Your flowers are being prepared with care.
            </p>
            <p className="text-gray-600">
              A confirmation email has been sent to your email address.
            </p>
          </div>

          {/* Order details */}
          <div className="bg-cream rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-sm text-gray-600 mb-2">Order Number</p>
                <p className="font-serif text-2xl font-bold text-charcoal">{orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Order Date</p>
                <p className="font-serif text-2xl font-bold text-charcoal">{orderDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Estimated Delivery</p>
                <p className="font-serif text-2xl font-bold text-charcoal">Tomorrow</p>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8">
              <h2 className="font-semibold text-charcoal mb-4">What's Next?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-sage font-bold mt-0.5">1</span>
                  <span>We're carefully preparing your flowers for delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage font-bold mt-0.5">2</span>
                  <span>Track your order status in your account dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage font-bold mt-0.5">3</span>
                  <span>Receive your beautiful fresh arrangement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage font-bold mt-0.5">4</span>
                  <span>Check your email for care instructions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Care tips */}
          <div className="bg-white border-2 border-sage rounded-lg p-8 mb-12">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
              Flower Care Tips
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal mb-2">When You Receive</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Keep flowers in a cool location</li>
                  <li>• Remove packaging carefully</li>
                  <li>• Cut stems at 45° angle</li>
                  <li>• Place in fresh water immediately</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-charcoal mb-2">Daily Maintenance</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Change water every 2-3 days</li>
                  <li>• Keep away from direct sunlight</li>
                  <li>• Remove wilted petals</li>
                  <li>• Use flower food packets included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact support */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
              Questions? We're Here to Help
            </h2>
            <p className="text-gray-700 mb-6">
              Contact our customer support team if you have any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+1234567890"
                className="px-6 py-3 bg-clay-light text-charcoal font-semibold rounded-button hover:bg-clay-dark transition-colors"
              >
                Call Us
              </a>
              <Link href="/contact">
                <Button variant="outline">Contact Support</Button>
              </Link>
            </div>
          </div>

          {/* Continue shopping */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Loved your flowers? Send more to someone special.
            </p>
            <Link href="/occasions">
              <Button size="lg">Shop More Flowers</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
