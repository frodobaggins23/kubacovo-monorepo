const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        // UI Component theme colors with CSS variable support
        'ui-primary': {
          DEFAULT: 'rgb(var(--ui-primary) / <alpha-value>)',
          hover: 'rgb(var(--ui-primary-hover) / <alpha-value>)',
        },
        'ui-secondary': {
          DEFAULT: 'rgb(var(--ui-secondary) / <alpha-value>)',
          hover: 'rgb(var(--ui-secondary-hover) / <alpha-value>)',
        },
        'ui-danger': {
          DEFAULT: 'rgb(var(--ui-danger) / <alpha-value>)',
          hover: 'rgb(var(--ui-danger-hover) / <alpha-value>)',
        },
        'ui-background': 'rgb(var(--ui-background) / <alpha-value>)',
        'ui-surface': 'rgb(var(--ui-surface) / <alpha-value>)',
        'ui-border': 'rgb(var(--ui-border) / <alpha-value>)',
        'ui-text': {
          primary: 'rgb(var(--ui-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--ui-text-secondary) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
