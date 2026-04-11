import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://loverflowers.com'),
  title: {
    default: 'Loverflowers - Handcrafted Flower Arrangements & Gifts',
    template: '%s | Loverflowers',
  },
  description: 'Beautifully crafted flower arrangements for every occasion. Same-day delivery available. Fresh flowers sourced daily.',
  keywords: [
    'flower delivery',
    'fresh flowers',
    'flower arrangements',
    'bouquets',
    'gift flowers',
    "mother's day flowers",
    "valentine's day flowers",
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://loverflowers.com',
    siteName: 'Loverflowers',
    title: 'Loverflowers - Handcrafted Flower Arrangements & Gifts',
    description: 'Beautifully crafted flower arrangements for every occasion. Same-day delivery available.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Loverflowers - Premium Flower Arrangements',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loverflowers - Handcrafted Flower Arrangements & Gifts',
    description: 'Beautifully crafted flower arrangements for every occasion.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://loverflowers.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
