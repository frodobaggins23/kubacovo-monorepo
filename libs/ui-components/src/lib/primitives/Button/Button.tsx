import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button({
  size = 'md',
  variant = 'primary',
  disabled = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-ui-primary text-white hover:bg-ui-primary-hover focus:ring-ui-primary/30',
    secondary:
      'bg-ui-secondary/20 text-ui-text-primary hover:bg-ui-secondary/30 focus:ring-ui-secondary/30',
    danger:
      'bg-ui-danger text-white hover:bg-ui-danger-hover focus:ring-ui-danger/30',
    outline:
      'border border-ui-border bg-ui-background text-ui-text-primary hover:bg-ui-surface focus:ring-ui-primary/30',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
