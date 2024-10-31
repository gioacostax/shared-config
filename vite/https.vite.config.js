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
/** @type (host: string, path?: string, scriptName?: string) => import('vite').UserConfig */
export default (host, path = './cert', scriptName = 'dev:https') =>
  defineConfig({
    ...(process.env.npm_lifecycle_event === scriptName && {
      host,
      https: {
        cert: readFileSync(resolve(path, `${host}.pem`)),
        key: readFileSync(resolve(path, `${host}-key.pem`)),
      },
    }),
  });
