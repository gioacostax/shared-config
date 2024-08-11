/**
 * This file can be used to define Vitest configuration,
 * more info in https://vitest.dev/config/
 */

/// <reference types="vitest" />

import { resolve } from 'path';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig(() => ({
  test: {
    alias: {
      '@': resolve(process.cwd(), './src/'),
    },
    clearMocks: true,
    coverage: {
      all: true,
      exclude: ['shared/vitest/test.utils.tsx', ...coverageConfigDefaults.exclude],
      include: ['src/**', 'shared/react/**'],
      provider: 'istanbul',
      reporter: ['html-spa', 'lcov', 'text'],
    },
    environment: 'jsdom',
    globals: true,
    include: [
      'src/**/*.{test,spec}.?(c|m)[jt]s?(x)',
      'shared/react/**/*.{test,spec}.?(c|m)[jt]s?(x)',
    ],
    outputFile: {
      junit: 'reports/junit.xml',
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    reporters: ['default', 'junit'],
    restoreMocks: true,
    setupFiles: 'shared/vitest/test.setup.tsx',
    silent: true,
  },
}));
