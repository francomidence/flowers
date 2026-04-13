'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  id,
  className = '',
  required,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-md">
      {label && (
        <label
          htmlFor={inputId}
          className="text-label text-charcoal font-semibold"
        >
          {label}
          {required && <span className="text-terracotta ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`
          px-md py-lg border-b-2 border-tonal-mid bg-transparent
          font-sans text-body text-charcoal
          focus:outline-none focus:border-b-2 focus:border-terracotta focus:ring-0
          transition-colors duration-normal
          placeholder:text-gray-400
          ${error ? 'border-b-2 border-red-500 focus:border-red-500' : ''}
          ${className}
        `}
        required={required}
        {...props}
      />
      {error && (
        <span className="text-body-xs text-red-600">{error}</span>
      )}
      {helperText && !error && (
        <span className="text-body-xs text-text-secondary">{helperText}</span>
      )}
    </div>
  );
}
