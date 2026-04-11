import { Product } from './types';

export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: [product.image, ...product.images],
    brand: {
      '@type': 'Brand',
      name: 'Loverflowers',
    },
    offers: {
      '@type': 'Offer',
      url: `https://loverflowers.com/products/${product.id}`,
      priceCurrency: 'USD',
      price: product.price.toString(),
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Loverflowers',
      },
    },
    aggregateRating: product.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: product.rating.toString(),
          reviewCount: (product.reviews || 0).toString(),
        }
      : undefined,
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Loverflowers',
    url: 'https://loverflowers.com',
    logo: 'https://loverflowers.com/logo.png',
    description:
      'Handcrafted flower arrangements for every occasion. Same-day delivery available.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+1-234-567-8900',
      email: 'support@loverflowers.com',
    },
    sameAs: [
      'https://www.facebook.com/loverflowers',
      'https://www.instagram.com/loverflowers',
      'https://www.twitter.com/loverflowers',
    ],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
