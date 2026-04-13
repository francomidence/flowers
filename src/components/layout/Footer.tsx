import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white mt-section" role="contentinfo">
      <div className="max-w-7xl mx-auto px-gutter py-sectionLarge">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-xl mb-xl">
          {/* Brand */}
          <div>
            <h3 className="text-heading-md font-serif font-bold mb-lg">Loverflowers</h3>
            <p className="text-body-sm text-white/70 leading-relaxed">
              Handcrafted flower arrangements for every occasion. Fresh, beautiful, delivered with care.
            </p>
          </div>

          {/* Shop */}
          <nav>
            <h4 className="text-label font-semibold mb-lg">Shop</h4>
            <ul className="space-y-sm text-body-sm text-white/70">
              <li>
                <Link href="/products" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  All Arrangements
                </Link>
              </li>
              <li>
                <Link href="/occasions/valentines" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  Valentine's Day
                </Link>
              </li>
              <li>
                <Link href="/occasions/mothers-day" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  Mother's Day
                </Link>
              </li>
              <li>
                <Link href="/occasions/sympathy" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  Sympathy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <h4 className="text-label font-semibold mb-lg">Company</h4>
            <ul className="space-y-sm text-body-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h4 className="text-label font-semibold mb-lg">Legal</h4>
            <ul className="space-y-sm text-body-sm text-white/70">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta rounded px-sm py-xs inline-block">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="divider-tonal-strong mb-xl opacity-30" />
        <p className="text-center text-body-xs text-white/50">
          © {currentYear} Loverflowers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
