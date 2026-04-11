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
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-charcoal"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`
          px-4 py-3 border-2 border-gray-200 rounded-button
          font-sans text-base text-charcoal
          focus:outline-none focus:border-clay-light focus:ring-2 focus:ring-clay-light focus:ring-opacity-30
          transition-colors duration-200
          placeholder:text-gray-400
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        required={required}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-600">{error}</span>
      )}
      {helperText && !error && (
        <span className="text-sm text-gray-500">{helperText}</span>
      )}
    </div>
  );
}
