'use client';

import React, { useState } from 'react';
import { Badge } from '../ui';
import Image from 'next/image';

export interface GridItem {
  id: string;
  title: string;
  image: string;
  badge?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  imageWidth?: number;
  imageHeight?: number;
}

interface FeaturedGridProps {
  items: GridItem[];
  variant?: 'standard' | 'asymmetric';
}

export function FeaturedGrid({ items, variant = 'asymmetric' }: FeaturedGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[2/3]',
    landscape: 'aspect-video',
  };

  return (
    <section className="py-section">
      <div className="max-w-7xl mx-auto px-gutter">
        {/* Asymmetric masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md auto-rows-max">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`
                group relative overflow-hidden rounded-lg
                ${idx === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'}
                ${idx === items.length - 1 && variant === 'asymmetric' ? 'md:col-span-2' : ''}
              `}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`w-full h-full ${aspectClasses[item.aspectRatio || 'square']}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.imageWidth || 500}
                  height={item.imageHeight || 500}
                  className={`w-full h-full object-cover transition-transform duration-slow ${
                    hoveredId === item.id ? 'scale-110' : ''
                  }`}
                />
              </div>

              {/* Tonal overlay on hover */}
              <div
                className={`absolute inset-0 bg-tonal-strong transition-opacity duration-normal flex items-end ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="p-lg w-full">
                  {item.badge && <Badge variant="primary">{item.badge}</Badge>}
                  <h3 className="text-heading-sm text-white font-serif mt-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
