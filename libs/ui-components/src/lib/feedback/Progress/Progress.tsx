import React from 'react';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
  disabled?: boolean;
  value?: number; // Progress value from 0 to 100
  showPercentage?: boolean; // Whether to show percentage label
  children?: React.ReactNode;
}

export function Progress({
  size = 'md',
  variant = 'default',
  disabled = false,
  value = 0,
  showPercentage = false,
  className = '',
  children,
  ...props
}: ProgressProps) {
  const baseClasses =
    'relative w-full bg-ui-border rounded-full overflow-hidden';

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const variantClasses = {
    default: 'bg-ui-primary',
    success: 'bg-ui-success',
    warning: 'bg-ui-warning',
    error: 'bg-ui-danger',
  };

  const safeValue = Math.max(0, Math.min(100, value));
  const progressWidth = `${safeValue}%`;

  // Determine if text should be above (for sm/md sizes) or overlaid (for lg)
  const isTextAbove = (size === 'sm' || size === 'md') && showPercentage;

  // For overlay text, determine if progress has passed the center point
  const isProgressOverCenter = safeValue > 50;

  const classes = `${baseClasses} ${sizeClasses[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  const percentageText = showPercentage && (
    <span
      className={`text-xs font-medium ${
        isTextAbove
          ? 'text-ui-foreground'
          : `absolute inset-0 flex items-center justify-center transition-colors duration-300 ${
              isProgressOverCenter ? 'text-white' : 'text-ui-foreground'
            }`
      }`}
    >
      {Math.round(safeValue)}%
    </span>
  );

  if (isTextAbove) {
    return (
      <div className='space-y-1'>
        <div className='flex justify-center'>
          <span className='text-center'>{percentageText}</span>
        </div>
        <div
          className={classes}
          role='progressbar'
          aria-valuenow={safeValue}
          aria-valuemin={0}
          aria-valuemax={100}
          {...props}
        >
          <div
            className={`h-full transition-all duration-300 ease-in-out rounded-full ${variantClasses[variant]}`}
            style={{ width: progressWidth }}
          />
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={classes}
      role='progressbar'
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <div
        className={`h-full transition-all duration-300 ease-in-out rounded-full ${variantClasses[variant]}`}
        style={{ width: progressWidth }}
      />
      {percentageText}
      {children}
    </div>
  );
}
