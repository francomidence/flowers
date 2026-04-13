'use client';

import React from 'react';
import { Surface } from '../ui';
import Image from 'next/image';

interface EditorialBlockProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  content: React.ReactNode;
  imagePosition?: 'left' | 'right';
  imageWidth?: number;
  imageHeight?: number;
}

export function EditorialBlock({
  title,
  description,
  imageUrl,
  imageAlt,
  content,
  imagePosition = 'right',
  imageWidth = 500,
  imageHeight = 600,
}: EditorialBlockProps) {
  return (
    <section className="py-section md:py-sectionLarge">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-section items-end">
          {/* Image with offset */}
          <div
            className={`md:col-span-3 asymmetric-offset ${
              imagePosition === 'left' ? 'md:col-start-1' : 'md:col-start-3'
            }`}
          >
            <div className="relative w-full h-80 md:h-96">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Text content */}
          <div
            className={`md:col-span-2 ${
              imagePosition === 'left' ? 'md:col-start-4 md:row-start-1' : 'md:col-start-1 md:row-start-1'
            }`}
          >
            <h2 className="font-serif text-heading-lg text-charcoal mb-lg">{title}</h2>
            <p className="text-body text-text-secondary mb-xl">{description}</p>
            <Surface variant="light" className="p-lg">
              {content}
            </Surface>
          </div>
        </div>
      </div>
    </section>
  );
}
