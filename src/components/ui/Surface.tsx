'use client';

import React from 'react';

interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'mid' | 'strong' | 'glass';
  as?: 'div' | 'article' | 'section';
}

export function Surface({
  variant = 'light',
  as: Component = 'div',
  className = '',
  children,
  ...props
}: SurfaceProps) {
  const variants = {
    light: 'bg-tonal-light',
    mid: 'bg-tonal-mid',
    strong: 'bg-tonal-strong',
    glass: 'surface-glass',
  };

  return (
    <Component
      className={`rounded-lg transition-colors duration-normal ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
