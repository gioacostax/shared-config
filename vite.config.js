/**
 * Project vite (base-config)
 * more info in https://vitejs.dev/config/
 */

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsDir: '.',
    outDir: 'build',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[hash].[ext]',
        chunkFileNames: 'js/[hash].js',
        entryFileNames: 'index-[hash].js',
        manualChunks: (id) => id.includes('node_modules') && 'vendor',
      },
    },
  },
});
