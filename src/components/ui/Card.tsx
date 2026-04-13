'use client';

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  variant?: 'light' | 'mid' | 'glass';
}

export function Card({
  children,
  hoverable = false,
  variant = 'light',
  className = '',
  ...props
}: CardProps) {
  const variants = {
    light: 'bg-tonal-light',
    mid: 'bg-tonal-mid',
    glass: 'surface-glass',
  };

  return (
    <div
      className={`
        rounded-lg overflow-hidden transition-all duration-normal
        ${variants[variant]}
        ${hoverable ? 'hover:bg-tonal-mid cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'editorial';
}

export function CardImage({
  aspectRatio = 'portrait',
  className = '',
  ...props
}: CardImageProps) {
  const ratios = {
    square: 'aspect-square',
    portrait: 'aspect-[2/3]',
    landscape: 'aspect-video',
    editorial: 'aspect-editorial',
  };

  return (
    <img
      className={`w-full h-auto object-cover transition-transform duration-slow hover:scale-105 ${ratios[aspectRatio]} ${className}`}
      {...props}
    />
  );
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardBody({ children, className = '', ...props }: CardBodyProps) {
  return (
    <div className={`p-lg md:p-xl ${className}`} {...props}>
      {children}
    </div>
  );
}
