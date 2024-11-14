/**
 * This file can be used to define Vite configuration,
 * more info in https://vitejs.dev/config/
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Vite config dependencies
 * - vite
 */
/** @type (host: string, port?: number, path?: string, scriptName?: string) => object */
export default (host, port = 4321, path = './.cert', scriptName = 'dev:https') => ({
  ...(process.env.npm_lifecycle_event === scriptName && {
    host,
    https: {
      cert: readFileSync(resolve(path, `${host}.crt`)),
      key: readFileSync(resolve(path, `${host}.key`)),
    },
    port,
  }),
});
