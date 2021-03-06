const { extensions } = require('./.vscode/settings.json')['eslint.options']

/**
 * @file Lint Staged Configuration
 * @see https://github.com/okonet/lint-staged
 */

module.exports = {
  /**
   * Linting command rules.
   */
  [`*.{${extensions.map(ext => ext.slice(1)).join()}}`]: [
    'yarn fix:style',
    'git add -A'
  ],

  /**
   * Formatting command rules.
   */
  '*': ['yarn fix:format', 'git add -A'],

  /**
   * Local integrity check.
   */
  'yarn.lock': ['yarn check:dedupe']
}
