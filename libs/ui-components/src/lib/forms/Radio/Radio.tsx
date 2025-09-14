import React from 'react';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
    const baseClasses =
      'rounded-full border focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed';

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

    const radioId = React.useId();
    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    const radio = (
      <input
        ref={ref}
        id={radioId}
        type='radio'
        disabled={disabled}
        className={classes}
        {...props}
      />
    );

    if (label) {
      return (
        <label
          htmlFor={radioId}
          className='flex items-center space-x-2 cursor-pointer'
        >
          {radio}
          <span className='text-sm text-ui-text-primary select-none'>
            {label}
          </span>
        </label>
      );
    }

    return radio;
  }
);

Radio.displayName = 'Radio';
