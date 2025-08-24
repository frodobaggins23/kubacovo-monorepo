import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Badge({
  size = 'md',
  variant = 'default',
  disabled = false,
  className = '',
  children,
  ...props
}: BadgeProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-medium';

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  const variantClasses = {
    default: 'bg-ui-surface text-ui-text-primary border border-ui-border',
    primary: 'bg-ui-primary text-white',
    secondary: 'bg-ui-secondary/20 text-ui-text-primary',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    danger: 'bg-ui-danger text-white',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
