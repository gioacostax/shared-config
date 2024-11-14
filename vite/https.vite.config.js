/**
 * This file can be used to define Vite configuration,
 * more info in https://vitejs.dev/config/
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';

/**
 * Vite config dependencies
 * - vite
 */
export default (host, port = 4321, path = './.cert', scriptName = 'dev:https') =>
  /** @type (host: string, path?: string, scriptName?: string) => import('vite').UserConfig */
  defineConfig({
    server: {
      ...(process.env.npm_lifecycle_event === scriptName && {
        host,
        https: {
          cert: readFileSync(resolve(path, `${host}.crt`)),
          key: readFileSync(resolve(path, `${host}.key`)),
        },
        port,
      }),
    },
  });
