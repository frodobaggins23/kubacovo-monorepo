import type { ReactNode } from 'react';

interface StoryWrapperProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

/**
 * Reusable wrapper component for Storybook stories that provides consistent
 * theme-aware styling and layout.
 *
 * Features:
 * - Theme-aware background and text colors that fill entire viewport
 * - Full viewport coverage (100vw x 100vh)
 * - Centered content positioning
 * - Optional additional className for customization
 */
export function StoryWrapper({
  children,
  className = '',
  centered = true,
}: StoryWrapperProps) {
  return (
    <div
      className={`bg-ui-background text-ui-text-primary w-screen h-screen ${centered ? 'flex items-center justify-center' : ''} ${className}`}
    >
      <div className='p-6'>{children}</div>
    </div>
  );
}
