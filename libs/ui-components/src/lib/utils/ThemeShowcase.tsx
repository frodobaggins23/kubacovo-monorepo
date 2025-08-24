import type { ReactNode } from 'react';
import { StoryWrapper } from './StoryWrapper';

interface ThemeShowcaseWrapperProps {
  componentName: string;
  children: ReactNode;
  surfaceExample?: ReactNode;
  className?: string;
}

/**
 * Reusable theme showcase component for Storybook stories that demonstrates
 * how components adapt to different themes.
 *
 * Features:
 * - Consistent header and description across all components
 * - Theme-aware background with border styling
 * - Surface example section with theme-aware background
 * - Customizable content via children prop
 */
export function ThemeShowcaseWrapper({
  componentName,
  children,
  surfaceExample,
  className = '',
}: ThemeShowcaseWrapperProps) {
  return (
    <StoryWrapper
      className={`border border-ui-border ${className}`}
      centered={false}
    >
      <h3 className='text-lg font-semibold mb-4 text-ui-text-primary'>
        Theme-Aware {componentName}
      </h3>
      <p className='text-ui-text-secondary mb-6'>
        Use the theme switcher in the toolbar above to see how {componentName}{' '}
        components adapt to light and dark themes.
      </p>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2 items-center flex-wrap'>{children}</div>
        {surfaceExample && (
          <div className='bg-ui-surface p-4 rounded border border-ui-border'>
            <p className='text-ui-text-secondary text-sm mb-2'>
              Surface background with border
            </p>
            <div className='flex gap-2 items-center'>{surfaceExample}</div>
          </div>
        )}
      </div>
    </StoryWrapper>
  );
}
