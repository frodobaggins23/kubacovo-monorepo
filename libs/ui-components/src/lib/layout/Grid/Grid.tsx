import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  columns?: number | 'auto-fit' | 'auto-fill';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  minItemWidth?: string;
  children?: React.ReactNode;
}

export function Grid({
  columns = 'auto-fit',
  gap = 'md',
  minItemWidth = '200px',
  className = '',
  children,
  ...props
}: GridProps) {
  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const gridTemplateColumns =
    typeof columns === 'number'
      ? `repeat(${columns}, 1fr)`
      : columns === 'auto-fit'
        ? `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`
        : `repeat(auto-fill, minmax(${minItemWidth}, 1fr))`;

  const classes = `grid ${gapClasses[gap]} ${className}`;

  return (
    <div
      className={classes}
      style={{ gridTemplateColumns, ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
}
