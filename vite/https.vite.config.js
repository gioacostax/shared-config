/**
 * This file can be used to define Vite configuration,
 * more info in https://vitejs.dev/config/
 */

import { defineConfig } from 'astro/config';
import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Vite config dependencies
 * - vite
 */
/** @type (host: string, path?: string, scriptName?: string) => import('vite').UserConfig */
export default (host, path = './.cert', scriptName = 'dev:https') =>
  defineConfig({
    server: {
      ...(process.env.npm_lifecycle_event === scriptName && {
        host,
        https: {
          cert: readFileSync(resolve(path, `${host}.crt`)),
          key: readFileSync(resolve(path, `${host}.key`)),
        },
        port: 4321,
      }),
    },
  });
