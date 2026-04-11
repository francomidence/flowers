import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-sans font-semibold rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-clay-light text-charcoal hover:bg-clay-dark focus:ring-clay-dark shadow-sm hover:shadow-md',
    secondary:
      'bg-sage text-charcoal hover:bg-opacity-90 focus:ring-sage shadow-sm hover:shadow-md',
    outline:
      'border-2 border-clay-light text-clay-light hover:bg-clay-light hover:text-charcoal focus:ring-clay-light',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-[44px]',
    md: 'px-4 py-3 text-base min-h-[44px]',
    lg: 'px-6 py-4 text-lg min-h-[44px]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
