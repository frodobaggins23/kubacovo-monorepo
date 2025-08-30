import React from 'react';
import { Icon } from '../../primitives/Icon';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'info' | 'success' | 'warning' | 'error';
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function Alert({
  size = 'md',
  variant = 'info',
  showIcon = true,
  className = '',
  children,
  ...props
}: AlertProps) {
  const baseClasses = 'relative rounded-lg border px-4 py-3 text-sm';

  const sizeClasses = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-base',
  };

  const variantClasses = {
    info: 'border-ui-info/20 bg-ui-info/10 text-ui-info',
    success: 'border-ui-success/20 bg-ui-success/10 text-ui-success',
    warning: 'border-ui-warning/20 bg-ui-warning/10 text-ui-warning',
    error: 'border-ui-danger/20 bg-ui-danger/10 text-ui-danger',
  };

  const iconMap = {
    info: 'InformationCircle',
    success: 'CheckCircle',
    warning: 'ExclamationTriangle',
    error: 'XCircle',
  } as const;

  const iconClasses = {
    info: 'text-ui-info',
    success: 'text-ui-success',
    warning: 'text-ui-warning',
    error: 'text-ui-danger',
  };

  const iconSize = size === 'lg' ? 'lg' : 'md';

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    showIcon ? 'pl-10' : ''
  } ${className}`;

  return (
    <div className={classes} {...props}>
      {showIcon && (
        <Icon
          name={iconMap[variant]}
          size={iconSize}
          className={`absolute left-3 top-3 flex-shrink-0 ${iconClasses[variant]}`}
        />
      )}
      <div className={showIcon ? '' : ''}>{children}</div>
    </div>
  );
}
