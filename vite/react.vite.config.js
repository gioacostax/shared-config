/**
 * Project vite (base-config)
 * more info in https://vitejs.dev/config/
 */

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

/**
 * Vite React config dependencies
 * - @vitejs/plugin-react-swc
 * - vite-plugin-svgr
 */
export default defineConfig({
  plugins: [react(), svgr()],
});
