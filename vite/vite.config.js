/**
 * Project vite (base-config)
 * more info in https://vitejs.dev/config/
 */

import { defineConfig } from 'vite';

/**
 * Vite React config dependencies
 * - vite
 */
export default defineConfig({
  build: {
    assetsDir: '_assets',
    outDir: 'build',
    rollupOptions: {
      output: {
        assetFileNames: '_assets/[hash].[ext]',
        chunkFileNames: '_assets/[hash].mjs',
        entryFileNames: '_assets/[hash].js',
        manualChunks: (id) => id.includes('node_modules') && 'vendor',
      },
    },
  },
});
