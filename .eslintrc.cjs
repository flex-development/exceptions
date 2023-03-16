/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

/**
 * @type {import('eslint').Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...require('./.eslintrc.base.cjs').overrides,
    {
      files: ['__mocks__/@flex-development/aggregate-error-ponyfill.ts'],
      rules: {
        '@typescript-eslint/unbound-method': 0
      }
    },
    {
      files: ['src/exceptions/base.exception.ts'],
      rules: {
        'unicorn/custom-error-definition': 0
      }
    }
  ],
  root: true
}

module.exports = config
