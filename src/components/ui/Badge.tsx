'use client';

import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'sage' | 'outlined';
  children: React.ReactNode;
}

export function Badge({
  variant = 'primary',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    primary: 'bg-tonal-light text-terracotta',
    secondary: 'bg-tonal-mid text-charcoal',
    sage: 'bg-sage/20 text-sage',
    outlined: 'border border-tonal-mid text-charcoal',
  };

  return (
    <span
      className={`
        inline-flex items-center px-lg py-sm text-label-sm font-semibold rounded-full
        transition-colors duration-normal
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}
