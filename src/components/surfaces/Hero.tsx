'use client';

import React from 'react';
import { Button } from '../ui';
import Image from 'next/image';

interface HeroProps {
  headline: string;
  subheading: string;
  imageUrl: string;
  imageAlt: string;
  cta?: { text: string; href: string };
  layout?: 'left' | 'right';
  imageWidth?: number;
  imageHeight?: number;
}

export function Hero({
  headline,
  subheading,
  imageUrl,
  imageAlt,
  cta,
  layout = 'right',
  imageWidth = 600,
  imageHeight = 700,
}: HeroProps) {
  return (
    <section className="relative w-full py-section md:py-sectionLarge bg-clay overflow-hidden">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-section items-center">
          {/* Content - asymmetric offset */}
          <div
            className={`relative z-10 ${
              layout === 'right' ? 'md:col-start-1 md:pr-section' : 'md:col-start-2 md:pl-section'
            }`}
          >
            <h1 className="font-serif text-display-lg text-charcoal mb-lg">
              {headline}
            </h1>
            <p className="text-body text-text-secondary mb-xl max-w-lg">{subheading}</p>
            {cta && (
              <Button size="lg">
                {cta.text}
              </Button>
            )}
          </div>

          {/* Image - high contrast, overlapping */}
          <div
            className={`relative h-96 md:h-full asymmetric-overlap ${
              layout === 'right' ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1 md:row-start-1'
            }`}
          >
            <div className="relative w-full h-96 md:h-[500px]">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                priority
              />
              {/* Tonal gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-overlay rounded-lg pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
