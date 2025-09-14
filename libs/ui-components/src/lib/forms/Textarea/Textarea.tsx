import React from 'react';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'md',
      variant = 'default',
      className = '',
      disabled = false,
      label,
      ...props
    },
    ref
  ) => {
    const textareaId = React.useId();

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

    const textareaClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    const textarea = (
      <textarea
        ref={ref}
        id={textareaId}
        disabled={disabled}
        className={textareaClasses}
        {...props}
      />
    );

    if (label) {
      return (
        <div className='w-full'>
          <label
            htmlFor={textareaId}
            className='block text-sm font-medium text-ui-text-primary mb-1'
          >
            {label}
          </label>
          {textarea}
        </div>
      );
    }

    return textarea;
  }
);

Textarea.displayName = 'Textarea';
