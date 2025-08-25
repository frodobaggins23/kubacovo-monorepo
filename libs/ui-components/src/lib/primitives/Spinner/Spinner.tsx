import React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'secondary';
  animation?: 'spin' | 'orbit' | 'pulse' | 'bounce';
  disabled?: boolean;
  label?: string;
  showLabel?: boolean;
}

export function Spinner({
  size = 'md',
  variant = 'default',
  animation = 'spin',
  disabled = false,
  className = '',
  label = 'Loading',
  showLabel = false,
  ...props
}: SpinnerProps) {
  const sizeConfig = {
    sm: { container: 'h-4 w-4', dot: 'h-1 w-1', text: 'text-xs' },
    md: { container: 'h-6 w-6', dot: 'h-1.5 w-1.5', text: 'text-sm' },
    lg: { container: 'h-8 w-8', dot: 'h-2 w-2', text: 'text-base' },
  };

  const variantClasses = {
    default: 'text-ui-text-primary',
    primary: 'text-ui-primary',
    secondary: 'text-ui-secondary',
  };

  const currentSize = sizeConfig[size];
  const currentVariant = variantClasses[variant];
  const disabledClass = disabled ? 'opacity-50' : '';

  const renderSpinner = () => {
    const commonProps = {
      role: 'status',
      'aria-label': label,
      className: `inline-flex items-center justify-center ${currentSize.container} ${currentVariant} ${disabledClass} ${className}`,
      ...props,
    };

    switch (animation) {
      case 'spin':
        return (
          <div {...commonProps}>
            <div className='animate-spin rounded-full border-2 border-solid border-current border-r-transparent w-full h-full' />
          </div>
        );

      case 'orbit':
        return (
          <div {...commonProps}>
            <div className='relative w-full h-full animate-spin'>
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${currentSize.dot} bg-current rounded-full`}
              />
              <div
                className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${currentSize.dot} bg-current rounded-full opacity-75`}
              />
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${currentSize.dot} bg-current rounded-full opacity-50`}
              />
              <div
                className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${currentSize.dot} bg-current rounded-full opacity-25`}
              />
            </div>
          </div>
        );

      case 'pulse':
        return (
          <div {...commonProps}>
            <div className='relative w-full h-full'>
              <div className='absolute inset-0 rounded-full bg-current opacity-75 animate-ping' />
              <div className='absolute inset-1 rounded-full bg-current opacity-50 animate-ping animation-delay-75' />
              <div className='absolute inset-2 rounded-full bg-current animate-ping animation-delay-150' />
            </div>
          </div>
        );

      case 'bounce':
        return (
          <div {...commonProps}>
            <div className='flex gap-1 items-center'>
              <div
                className={`${currentSize.dot} bg-current rounded-full animate-bounce`}
              />
              <div
                className={`${currentSize.dot} bg-current rounded-full animate-bounce animation-delay-75`}
              />
              <div
                className={`${currentSize.dot} bg-current rounded-full animate-bounce animation-delay-150`}
              />
            </div>
          </div>
        );

      default:
        return (
          <div {...commonProps}>
            <div className='animate-spin rounded-full border-2 border-solid border-current border-r-transparent w-full h-full' />
          </div>
        );
    }
  };

  if (showLabel) {
    return (
      <div className='flex flex-col items-center gap-2'>
        {renderSpinner()}
        <span className={`${currentSize.text} text-ui-text-secondary`}>
          {label}
        </span>
      </div>
    );
  }

  return renderSpinner();
}
