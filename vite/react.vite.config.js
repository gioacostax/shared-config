/**
 * Project vite (base-config)
 * more info in https://vitejs.dev/config/
 */

import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

/**
 * Vite React config dependencies
 * - @vitejs/plugin-react-swc
 * - vite-plugin-svgr
 */
export default defineConfig({
  plugins: [reactRouter(), svgr()],
});
