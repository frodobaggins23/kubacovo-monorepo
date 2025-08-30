import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  padding?: 'compact' | 'normal' | 'spacious';
  variant?: 'default' | 'outlined' | 'elevated';
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Card({
  padding = 'normal',
  variant = 'default',
  disabled = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-lg overflow-hidden';

  const paddingClasses = {
    compact: 'p-3',
    normal: 'p-4',
    spacious: 'p-6',
  };

  const variantClasses = {
    default: 'bg-ui-surface border border-ui-border',
    outlined: 'bg-ui-background border-2 border-ui-border',
    elevated: 'bg-ui-surface shadow-lg border border-ui-border/50',
  };

  const classes = `${baseClasses} ${paddingClasses[padding]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
