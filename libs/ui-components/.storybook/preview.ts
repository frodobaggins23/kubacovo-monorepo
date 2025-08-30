import type { Preview } from '@storybook/react';
import '../src/styles.css';
import '../src/theme.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' },
          { value: 'system', icon: 'browser', title: 'System' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || 'light';

      // Apply theme safely in browser environment
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const resolvedTheme =
          selectedTheme === 'system'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light'
            : selectedTheme;

        // Apply theme to Storybook root
        const storyRoot =
          document.querySelector('#storybook-root') || document.documentElement;
        storyRoot.setAttribute('data-theme', resolvedTheme);

        // Also apply to document root for full styling
        document.documentElement.setAttribute('data-theme', resolvedTheme);
      }

      return Story();
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          '01. Primitives',
          '02. Layout',
          '03. Forms',
          '04. Feedback',
          '05. Navigation',
          '06. Data Display',
        ],
      },
    },
  },
};

export default preview;
