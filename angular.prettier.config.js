/**
 * This file can be used to define Prettier configuration,
 * more info in https://prettier.io/docs/en/configuration/
 */

/**
 * Prettier config dependencies
 * - prettier-plugin-tailwindcss
 */
/** @type {import("prettier").Options} */
export default {
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
      },
    },
  ],
  plugins: [],
};
