/**
 * This file can be used to define Vite configuration,
 * more info in https://vitejs.dev/config/
 */

import { defineConfig } from 'vite';

export default defineConfig(() => ({
  build: {
    assetsDir: '.',
    outDir: 'build',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[hash].[ext]',
        chunkFileNames: 'js/[hash].js',
        entryFileNames: 'main-[hash].js',
      },
    },
  },
  server: {
    port: 3200,
    // proxy: {
    //   '/proxy/services': {
    //     rewrite: (path) => path.replace(/^\/proxy\/services/, ''),
    //     target: 'https://target...',
    //     changeOrigin: true,
    //     secure: false,
    //     cookieDomainRewrite: 'localhost',
    //   },
    // },
  },
}));
