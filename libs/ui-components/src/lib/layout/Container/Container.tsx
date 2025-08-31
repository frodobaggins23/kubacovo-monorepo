import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  children?: React.ReactNode;
}

export function Container({
  size = 'lg',
  padding = 'md',
  center = true,
  className = '',
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-sm', // 384px
    md: 'max-w-lg', // 512px
    lg: 'max-w-2xl', // 672px
    xl: 'max-w-4xl', // 896px
    full: 'max-w-full', // 100%
  };

  const paddingClasses = {
    none: 'px-0',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
    xl: 'px-12',
  };

  const classes = `${sizeClasses[size]} ${paddingClasses[padding]} ${center ? 'mx-auto' : ''} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
