'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  loading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-sans font-semibold transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-clay disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-terracotta text-white hover:bg-brick focus:ring-brick active:scale-95',
    secondary: 'bg-sage text-charcoal hover:opacity-90 focus:ring-sage',
    outline:
      'border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white focus:ring-terracotta',
    ghost: 'text-terracotta hover:bg-tonal-light focus:ring-terracotta',
  };

  const sizes = {
    sm: 'px-3 py-2 text-label-sm min-h-[44px] rounded-sm',
    md: 'px-4 py-3 text-body-sm min-h-[44px] rounded-md',
    lg: 'px-6 py-4 text-body min-h-[44px] rounded-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className="animate-subtle-shift">…</span> : children}
    </button>
  );
}
