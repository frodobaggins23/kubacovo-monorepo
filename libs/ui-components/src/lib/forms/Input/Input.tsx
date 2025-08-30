import React from 'react';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  errorMessage?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'default',
      className = '',
      disabled = false,
      type = 'text',
      errorMessage,
      helperText,
      ...props
    },
    ref
  ) => {
    const errorId = React.useId();
    const helperId = React.useId();

    // Automatically set variant to error if errorMessage is provided
    const effectiveVariant = errorMessage ? 'error' : variant;

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

    const inputClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[effectiveVariant]} ${className}`;

    const textSizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };

    // Build aria-describedby
    let describedBy = undefined;
    if (errorMessage) {
      describedBy = errorId;
    } else if (helperText) {
      describedBy = helperId;
    }

    return (
      <div className='w-full'>
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={errorMessage ? 'true' : 'false'}
          aria-describedby={describedBy}
          {...props}
        />
        {errorMessage && (
          <p
            id={errorId}
            className={`mt-1 ${textSizeClasses[size]} text-ui-danger`}
          >
            {errorMessage}
          </p>
        )}
        {helperText && !errorMessage && (
          <p
            id={helperId}
            className={`mt-1 ${textSizeClasses[size]} text-ui-text-secondary`}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
