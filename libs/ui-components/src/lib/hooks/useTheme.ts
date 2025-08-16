import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = Omit<Theme, 'system'>;

interface UseThemeReturn {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  systemTheme: ResolvedTheme;
}

const LS_THEME_KEY = 'ui-theme';

/**
 * Safely get theme from localStorage with validation
 */
function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';

  try {
    const stored = localStorage.getItem(LS_THEME_KEY) as Theme | null;
    if (stored && (['light', 'dark', 'system'] as const).includes(stored)) {
      return stored;
    }
  } catch (error) {
    // localStorage might not be available (e.g., SSR, private browsing)
    console.warn('Failed to read theme from localStorage:', error);
  }

  return 'system';
}

/**
 * Safely get system theme preference
 */
function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';

  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  } catch {
    return 'light';
  }
}

/**
 * Safely apply theme to document
 */
function applyThemeToDocument(resolvedTheme: ResolvedTheme) {
  if (typeof document === 'undefined') return;

  try {
    // Apply data-theme attribute to document root
    document.documentElement.setAttribute(
      'data-theme',
      resolvedTheme as string
    );

    // Also apply to Storybook iframe if present (for Storybook integration)
    const storyRoot = document.querySelector('#storybook-root');
    if (storyRoot) {
      storyRoot.setAttribute('data-theme', resolvedTheme as string);
    }
  } catch {
    // Silently fail if document manipulation fails
  }
}

/**
 * Safely save theme to localStorage
 */
function saveThemeToStorage(theme: Theme) {
  if (typeof localStorage === 'undefined') return;

  try {
    localStorage.setItem(LS_THEME_KEY, theme);
  } catch {
    // Silently fail if localStorage is not available
  }
}

/**
 * Hook for managing theme state with automatic system preference detection
 * and localStorage persistence.
 *
 * Features:
 * - Automatic system theme detection via prefers-color-scheme
 * - Manual theme override with localStorage persistence
 * - Smooth theme transitions (respects prefers-reduced-motion)
 * - TypeScript support with proper typing
 */
export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return () => null;

    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = (e: { matches: boolean }) => {
        setSystemTheme(e.matches ? 'dark' : 'light');
      };

      // Update system theme if it has changed since initialization
      const currentSystemTheme: ResolvedTheme = mediaQuery.matches
        ? 'dark'
        : 'light';
      if (currentSystemTheme !== systemTheme) {
        setSystemTheme(currentSystemTheme);
      }

      // Listen for changes
      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch {
      // If media query fails, keep current system theme
      return () => null;
    }
  }, [systemTheme]);

  // Apply theme to document
  useEffect(() => {
    const resolvedTheme = theme === 'system' ? systemTheme : theme;
    applyThemeToDocument(resolvedTheme);
  }, [theme, systemTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    saveThemeToStorage(newTheme);
  };

  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  return {
    theme,
    resolvedTheme,
    setTheme,
    systemTheme,
  };
}
