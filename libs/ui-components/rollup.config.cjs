const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    format: ['esm'],
    assets: [
      { input: '.', output: '.', glob: 'README.md' },
      { input: './src', output: '.', glob: '**/*.css' },
    ],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    plugins: [
      // Plugin to handle CSS imports (ignore them during build)
      {
        name: 'ignore-css-imports',
        resolveId(id) {
          if (id.endsWith('.css')) {
            return { id, external: true };
          }
          return null;
        },
      },
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
    ],
  }
);
