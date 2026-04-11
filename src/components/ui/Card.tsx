import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export function Card({
  children,
  hoverable = false,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-lg overflow-hidden
        ${hoverable ? 'transition-all duration-300 hover:shadow-lg hover:scale-102 cursor-pointer' : 'shadow-sm'}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'square' | 'portrait' | 'landscape';
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
  };

  return (
    <img
      className={`w-full h-auto object-cover ${ratios[aspectRatio]} ${className}`}
      {...props}
    />
  );
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardBody({ children, className = '', ...props }: CardBodyProps) {
  return (
    <div className={`p-4 md:p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
