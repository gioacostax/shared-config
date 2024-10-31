/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

/**
 * Astro React config dependencies
 * - @astrojs/preact
 * - vite-plugin-svgr
 * - preact
 */
export default defineConfig({
  integrations: [preact({ compat: true })],
  vite: {
    plugins: [svgr()],
  },
});
