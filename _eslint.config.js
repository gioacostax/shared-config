/**
 * This file can be used to define Eslint configuration,
 * more info in https://eslint.org/docs/latest/use/configure/configuration-files/
 */

import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import("eslint").Linter.Config} */
export default [
  /**
   * Base config with Typescript dependencies
   * - eslint
   * - globals
   * - typescript-eslint
   * - @eslint/js
   * - eslint-plugin-import-x
   * - eslint-import-resolver-typescript
   * - @typescript-eslint/parser
   */
  ...[
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
      ignores: ['build/**', 'dist/**', 'static/**'],
    },
    {
      languageOptions: {
        globals: { ...globals.browser, ...globals.node },
        parserOptions: {
          ecmaVersion: 'latest',
          projectService: true,
          sourceType: 'module',
          tsconfigRootDir: process.cwd(),
          warnOnUnsupportedTypeScriptVersion: false,
        },
      },
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
        'no-console': 'warn',
        'no-nested-ternary': 'warn',
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      ...tseslint.configs.disableTypeChecked,
    },
  ],

  /**
   * Codes Styles config dependencies
   * - eslint-plugin-prettier
   * - eslint-config-prettier
   * - eslint-plugin-perfectionist
   */
  {
    ...perfectionist.configs['recommended-alphabetical'],
    rules: {
      'jsx-sort-props': 'off',
      'perfectionist/sort-imports': [
        'warn',
        {
          customGroups: {
            type: {
              react: ['^react$', '^react-.+'],
              shared: ['^@shared/'],
            },
            value: {
              react: ['^react$', '^react-.+'],
              shared: ['^@shared/'],
            },
          },
          groups: [
            'type',
            'react',
            ['builtin', 'external'],
            'shared',
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          internalPattern: ['^@/'],
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-interfaces': 'warn',
      'perfectionist/sort-intersection-types': 'warn',
      'perfectionist/sort-jsx-props': 'warn',
      'perfectionist/sort-named-imports': [
        'warn',
        {
          groupKind: 'types-first',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-object-types': 'warn',
      'perfectionist/sort-objects': 'warn',
      'perfectionist/sort-union-types': [
        'warn',
        {
          groups: [
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'named',
            'object',
            'operator',
            'tuple',
            'union',
            'unknown',
            'nullish',
          ],
          type: 'alphabetical',
        },
      ],
      'sort-imports': 'off',
      'sort-type-constituents': 'off',
    },
  },
  {
    ...prettier,
    rules: {
      'prettier/prettier': 'warn',
    },
  },
];
