import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'sage';
  children: React.ReactNode;
}

export function Badge({
  variant = 'primary',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    primary: 'bg-clay-light bg-opacity-20 text-clay-dark',
    secondary: 'bg-charcoal bg-opacity-10 text-charcoal',
    sage: 'bg-sage bg-opacity-20 text-sage',
  };

  return (
    <span
      className={`
        inline-block px-3 py-1 text-sm font-medium rounded-full
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}
