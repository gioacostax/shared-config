/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

/**
 * Astro config dependencies
 * - @astrojs/sitemap
 * - @astrojs/tailwind
 */
export default defineConfig({
  build: {
    assets: '_assets',
    format: 'file',
    inlineStylesheets: 'always',
  },
  integrations: [tailwind(), sitemap()],
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
  trailingSlash: 'never',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_assets/[hash][extname]',
          chunkFileNames: '_assets/[hash].mjs',
          entryFileNames: '_assets/[hash].js',
        },
      },
    },
    plugins: [],
  },
});
