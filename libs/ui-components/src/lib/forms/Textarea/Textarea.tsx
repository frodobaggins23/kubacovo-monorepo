import React from 'react';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  errorMessage?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'md',
      variant = 'default',
      className = '',
      disabled = false,
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
      'block w-full rounded-md border placeholder-ui-text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed resize-vertical';

    const sizeClasses = {
      sm: 'px-2 py-1 text-xs min-h-[60px]',
      md: 'px-3 py-2 text-sm min-h-[80px]',
      lg: 'px-4 py-3 text-lg min-h-[100px]',
    };

    const variantClasses = {
      default:
        'border-ui-border bg-ui-background text-ui-text-primary focus:border-ui-primary focus:ring-ui-primary/30',
      error:
        'border-ui-danger bg-ui-background text-ui-text-primary focus:border-ui-danger focus:ring-ui-danger/30',
      success:
        'border-ui-success bg-ui-background text-ui-success focus:border-ui-success focus:ring-ui-success/30',
    };

    const textareaClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[effectiveVariant]} ${className}`;

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
        <textarea
          ref={ref}
          disabled={disabled}
          className={textareaClasses}
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

Textarea.displayName = 'Textarea';
