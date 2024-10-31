/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import criticalCSS from '@playform/inline';
import { defineConfig } from 'astro/config';

/**
 * Astro config dependencies
 * - @astrojs/sitemap
 * - @astrojs/tailwind
 * - @playform/inline
 */
export default defineConfig({
  build: {
    assets: 'assets',
    format: 'preserve',
  },
  integrations: [
    tailwind(),
    criticalCSS({
      Logger: 1, // Log only errors
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      defaultColor: 'light',
      themes: {
        dark: 'catppuccin-mocha',
        light: 'github-light',
      },
    },
  },
  outDir: './build',
  publicDir: './static',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/asset.[hash][extname]',
          chunkFileNames: 'assets/chunk.[hash].mjs',
          entryFileNames: 'assets/entry.[hash].mjs',
        },
      },
    },
    plugins: [],
  },
});
