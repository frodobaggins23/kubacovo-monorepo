import React from 'react';

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  children?: React.ReactNode;
}

export function Switch({
  size = 'md',
  variant = 'default',
  disabled = false,
  checked = false,
  onChange,
  label,
  className = '',
  children,
  ...props
}: SwitchProps) {
  const baseClasses =
    'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'h-4 w-7',
    md: 'h-5 w-9',
    lg: 'h-6 w-11',
  };

  const thumbSizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const thumbTranslateClasses = {
    sm: checked ? 'translate-x-3' : 'translate-x-0',
    md: checked ? 'translate-x-4' : 'translate-x-0',
    lg: checked ? 'translate-x-5' : 'translate-x-0',
  };

  const variantClasses = {
    default: `focus:ring-ui-primary/30 ${checked ? 'bg-ui-primary' : 'bg-ui-border'}`,
    success: `focus:ring-ui-success/30 ${checked ? 'bg-ui-success' : 'bg-ui-border'}`,
    warning: `focus:ring-ui-warning/30 ${checked ? 'bg-ui-warning' : 'bg-ui-border'}`,
    error: `focus:ring-ui-danger/30 ${checked ? 'bg-ui-danger' : 'bg-ui-border'}`,
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const switchElement = (
    <button
      type='button'
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      role='switch'
      aria-checked={checked}
      aria-label={label}
      {...props}
    >
      <span
        className={`${thumbSizeClasses[size]} inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${thumbTranslateClasses[size]}`}
      />
    </button>
  );

  if (label || children) {
    return (
      <label
        className={`inline-flex items-center gap-2 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {switchElement}
        {label || children}
      </label>
    );
  }

  return switchElement;
}
