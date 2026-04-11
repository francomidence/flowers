import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { Card, CardImage, CardBody, Badge, Button } from '@/components/ui';

interface ProductCardProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg';
}

export function ProductCard({ product, size = 'md' }: ProductCardProps) {
  const aspectRatios = {
    sm: 'square' as const,
    md: 'portrait' as const,
    lg: 'landscape' as const,
  };

  const sizeClasses = {
    sm: '',
    md: 'max-w-xs',
    lg: 'max-w-2xl',
  };

  return (
    <Link href={`/products/${product.id}`}>
      <Card hoverable className={sizeClasses[size]}>
        <CardImage
          src={product.image}
          alt={product.name}
          aspectRatio={aspectRatios[size]}
        />
        <CardBody>
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-sans font-semibold text-lg text-charcoal">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 my-3">
            {product.occasion.map((occ) => (
              <Badge key={occ} variant="sage" className="text-xs">
                {occ.replace('-', ' ')}
              </Badge>
            ))}
          </div>

          {/* Price & Stock */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <span className="text-2xl font-bold text-clay-dark">
              ${product.price}
            </span>
            {!product.inStock && (
              <span className="text-sm text-red-600 font-medium">Out of stock</span>
            )}
          </div>

          {/* Specs */}
          {product.stems && (
            <p className="text-xs text-gray-500 mt-2">{product.stems} stems</p>
          )}

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mt-2 text-sm">
              <span className="text-yellow-500">★</span>
              <span className="text-charcoal font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>
          )}
        </CardBody>
      </Card>
    </Link>
  );
}
