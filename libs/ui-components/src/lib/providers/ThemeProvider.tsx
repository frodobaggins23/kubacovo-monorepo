import React, { createContext, useContext } from 'react';
import { useTheme, type Theme, type ResolvedTheme } from '../hooks/useTheme';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  systemTheme: ResolvedTheme;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Theme provider component that wraps your app to enable theme switching
 *
 * Usage:
 * ```tsx
 * import { ThemeProvider } from '@kubacovo-monorepo/ui-components';
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourAppContent />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const themeValue = useTheme();

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context - alternative to useTheme hook
 *
 * @throws Error if used outside ThemeProvider
 */
export function useThemeContext(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
