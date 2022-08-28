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
  root: true,
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...require('./.eslintrc.base.cjs').overrides,
    {
      files: ['__fixtures__/error.ts', 'src/guards/is-exception.guard.ts'],
      rules: {
        'unicorn/error-message': 0
      }
    },
    {
      files: ['src/enums/firebase-error-status-code.enum.ts'],
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
      files: [
        'src/guards/is-exception-json.guard.ts',
        'src/guards/is-exception.guard.ts'
      ],
      rules: {
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/no-unsafe-member-access': 0
      }
    },
    {
      files: ['src/guards/is-exception.guard.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 0
      }
    },
    {
      files: ['src/index.ts'],
      rules: {
        /**
         * mkdist converts `exports.default` to `module.exports = _default`.
         *
         * `exports.default` statements are only output if `export default ...`
         * is used for default exports.
         *
         * this means that `export { default } from '...'` should **not** be
         * used where default exports should be supported, as with the package
         * entry point.
         *
         * @see https://github.com/unjs/mkdist/blob/v0.3.13/src/loaders/js.ts#L40
         */
        'unicorn/prefer-export-from': 0
      }
    }
  ]
}

module.exports = config
