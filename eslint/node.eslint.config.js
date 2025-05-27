/**
 * This file can be used to define Eslint configuration,
 * more info in https://eslint.org/docs/latest/use/configure/configuration-files/
 */

import globals from 'globals';

/** @type {import("eslint").Linter.Config} */
export default [
  /**
   * Base config with Typescript dependencies
   * - globals
   */
  ...[
    {
      languageOptions: {
        globals: { ...globals.node },
        parserOptions: {
          ecmaVersion: 'latest',
          projectService: true,
          sourceType: 'module',
          tsconfigRootDir: '../../../.',
          warnOnUnsupportedTypeScriptVersion: false,
        },
      },
      rules: {
        'no-console': 'off',
      },
    },
  ],
];
