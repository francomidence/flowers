'use client';

import React from 'react';

interface DividerProps {
  strength?: 'light' | 'mid' | 'strong';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({
  strength = 'light',
  orientation = 'horizontal',
  className = '',
}: DividerProps) {
  const strengthMap = {
    light: 'divider-tonal',
    mid: 'divider-tonal-strong opacity-75',
    strong: 'divider-tonal-strong',
  };

  if (orientation === 'vertical') {
    const variantClasses = {
      light: 'bg-tonal-light',
      mid: 'bg-tonal-mid opacity-75',
      strong: 'bg-tonal-strong',
    };
    return <div className={`w-px h-full ${variantClasses[strength]} ${className}`} />;
  }

  return <div className={`${strengthMap[strength]} w-full ${className}`} />;
}
