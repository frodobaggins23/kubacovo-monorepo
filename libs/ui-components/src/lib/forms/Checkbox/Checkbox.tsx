import React from 'react';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      variant = 'default',
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'rounded border focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeClasses = {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    };

    const variantClasses = {
      default:
        'border-ui-border accent-ui-primary focus:border-ui-primary focus:ring-ui-primary/30',
      error:
        'border-ui-danger accent-ui-danger focus:border-ui-danger focus:ring-ui-danger/30',
      success:
        'border-ui-success accent-ui-success focus:border-ui-success focus:ring-ui-success/30',
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    return (
      <input
        ref={ref}
        type='checkbox'
        disabled={disabled}
        className={classes}
        {...props}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';
