import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Loverflowers</h3>
            <p className="text-cream text-opacity-70 text-sm leading-relaxed">
              Handcrafted flower arrangements for every occasion. Fresh, beautiful, delivered with care.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-cream text-opacity-70">
              <li>
                <Link href="/arrangements" className="hover:text-cream transition-colors">
                  All Arrangements
                </Link>
              </li>
              <li>
                <Link href="/occasions/valentines" className="hover:text-cream transition-colors">
                  Valentine's Day
                </Link>
              </li>
              <li>
                <Link href="/occasions/mothers-day" className="hover:text-cream transition-colors">
                  Mother's Day
                </Link>
              </li>
              <li>
                <Link href="/occasions/sympathy" className="hover:text-cream transition-colors">
                  Sympathy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-cream text-opacity-70">
              <li>
                <Link href="/about" className="hover:text-cream transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cream transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cream transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-cream text-opacity-70">
              <li>
                <Link href="/privacy" className="hover:text-cream transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cream transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-cream transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream border-opacity-20 pt-8">
          <p className="text-center text-sm text-cream text-opacity-50">
            © {new Date().getFullYear()} Loverflowers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
