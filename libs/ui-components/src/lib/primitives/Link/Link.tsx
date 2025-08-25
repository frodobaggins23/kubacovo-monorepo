import React from 'react';

export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'muted';
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Link({
  size = 'md',
  variant = 'default',
  disabled = false,
  className = '',
  children,
  ...props
}: LinkProps) {
  const baseClasses =
    'inline-flex items-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ui-primary/30 focus:ring-offset-2';

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const variantClasses = {
    default: 'text-ui-primary hover:text-ui-primary-hover underline',
    primary: 'text-ui-primary hover:text-ui-primary-hover',
    muted: 'text-ui-text-secondary hover:text-ui-text-primary',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
