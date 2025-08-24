import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'rounded';
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Avatar({
  size = 'md',
  variant = 'default',
  disabled = false,
  className = '',
  children,
  ...props
}: AvatarProps) {
  const baseClasses =
    'inline-flex items-center justify-center bg-ui-secondary/20 text-ui-text-primary font-medium overflow-hidden border border-ui-border';

  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
  };

  const variantClasses = {
    default: 'rounded-full',
    rounded: 'rounded-md',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
