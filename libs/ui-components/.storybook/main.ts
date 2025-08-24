import type { StorybookConfig } from '@storybook/react-vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  previewHead: head => `
    ${head}
    <style>
      #storybook-root {
        padding: 0 !important;
        margin: 0 !important;
      }
    </style>
  `,

  viteFinal: async config =>
    mergeConfig(config, {
      plugins: [react(), nxViteTsPaths()],
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
    }),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
