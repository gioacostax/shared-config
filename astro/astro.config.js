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
  },
  integrations: [
    tailwind(),
    criticalCSS({
      Logger: 1, // Log only errors
    }),
    sitemap(),
  ],
  outDir: './build',
  publicDir: './static',
});
