import React from 'react';
import * as HeroiconsOutline from '@heroicons/react/24/outline';
import * as HeroiconsSolid from '@heroicons/react/24/solid';

// Extract icon names from Heroicons (removing the "Icon" suffix)
type OutlineIconNames = {
  [K in keyof typeof HeroiconsOutline]: K extends `${infer Name}Icon`
    ? Name
    : never;
}[keyof typeof HeroiconsOutline];

type SolidIconNames = {
  [K in keyof typeof HeroiconsSolid]: K extends `${infer Name}Icon`
    ? Name
    : never;
}[keyof typeof HeroiconsSolid];

// Include icons from both sets for maximum flexibility
export type IconName = OutlineIconNames | SolidIconNames;

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'children'> {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'muted' | 'danger';
  iconStyle?: 'outline' | 'solid';
  disabled?: boolean;
}

export function Icon({
  name,
  size = 'md',
  variant = 'default',
  iconStyle = 'outline',
  disabled = false,
  className = '',
  ...props
}: IconProps) {
  const iconComponentName = `${name}Icon` as keyof typeof HeroiconsOutline;

  const iconSets = {
    outline: HeroiconsOutline,
    solid: HeroiconsSolid,
  };

  const primaryIconSet = iconSets[iconStyle];
  const fallbackIconSet =
    iconStyle === 'outline' ? HeroiconsSolid : HeroiconsOutline;

  // Try preferred style first, fall back to other style if not available
  const IconComponent =
    primaryIconSet[iconComponentName] || fallbackIconSet[iconComponentName];

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
  };

  const variantClasses = {
    default: 'text-ui-text-primary',
    primary: 'text-ui-primary',
    secondary: 'text-ui-secondary',
    muted: 'text-ui-text-muted',
    danger: 'text-ui-danger',
  };

  const classes = `${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  // If no icon found, return a fallback
  if (!IconComponent) {
    return (
      <div
        className={classes}
        title={`Icon "${name}" not found`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        ?
      </div>
    );
  }

  return <IconComponent className={classes} {...props} />;
}
