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
      files: ['__fixtures__/error.ts', 'src/guards/is-exception.ts'],
      rules: {
        'unicorn/error-message': 0
      }
    },
    {
      files: ['src/enums/firebase-error-status-code.ts'],
      rules: {
        '@typescript-eslint/prefer-literal-enum-member': 0
      }
    },
    {
      files: [
        'src/exceptions/base.exception.ts',
        'src/exceptions/validation.exception.ts'
      ],
      rules: {
        '@typescript-eslint/class-literal-property-style': 0,
        '@typescript-eslint/prefer-as-const': 0
      }
    },
    {
      files: ['src/exceptions/base.exception.ts'],
      rules: {
        'unicorn/custom-error-definition': 0,
        'unicorn/no-keyword-prefix': 0
      }
    },
    {
      files: ['src/exceptions/validation.exception.ts'],
      rules: {
        '@typescript-eslint/restrict-template-expressions': 0
      }
    },
    {
      files: ['src/guards/is-exception-json.ts', 'src/guards/is-exception.ts'],
      rules: {
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/no-unsafe-member-access': 0
      }
    },
    {
      files: ['src/guards/is-exception.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 0
      }
    },
    {
      files: ['typings/axios/lib/core/createError.d.ts'],
      rules: {
        'unicorn/filename-case': 0
      }
    }
  ],
  root: true
}

module.exports = config
