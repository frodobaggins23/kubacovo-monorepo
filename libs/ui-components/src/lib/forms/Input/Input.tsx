import React from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'default',
      className = '',
      disabled = false,
      type = 'text',
      label,
      ...props
    },
    ref
  ) => {
    const inputId = React.useId();

    const baseClasses =
      'block w-full rounded-md border placeholder-ui-text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeClasses = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-3 text-lg',
    };

    const variantClasses = {
      default:
        'border-ui-border bg-ui-background text-ui-text-primary focus:border-ui-primary focus:ring-ui-primary/30',
      error:
        'border-ui-danger bg-ui-background text-ui-text-primary focus:border-ui-danger focus:ring-ui-danger/30',
      success:
        'border-ui-success bg-ui-background text-ui-success focus:border-ui-success focus:ring-ui-success/30',
    };

    const inputClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    const input = (
      <input
        ref={ref}
        id={inputId}
        type={type}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
    );

    if (label) {
      return (
        <div className='w-full'>
          <label
            htmlFor={inputId}
            className='block text-sm font-medium text-ui-text-primary mb-1'
          >
            {label}
          </label>
          {input}
        </div>
      );
    }

    return input;
  }
);

Input.displayName = 'Input';
