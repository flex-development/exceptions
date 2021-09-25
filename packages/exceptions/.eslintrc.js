const baseConfig = require('../../.eslintrc.base')

/**
 * @file ESLint Configuration
 * @see https://eslint.org/docs/user-guide/configuring
 */

const RULES_SPELLCHECKER = baseConfig.rules['spellcheck/spell-checker']

module.exports = {
  root: true,
  extends: ['../../.eslintrc.base'],
  rules: {
    'spellcheck/spell-checker': [
      RULES_SPELLCHECKER[0],
      {
        ...RULES_SPELLCHECKER[1],
        skipWords: [
          ...RULES_SPELLCHECKER[1].skipWords,
          'axios',
          'dto',
          'dtos',
          'enums',
          'firebase',
          'oauth',
          'parallelization',
          'saml',
          'satisfiable',
          'uid',
          'unlink',
          'unprocessable',
          'uri'
        ]
      }
    ]
  },
  overrides: [...baseConfig.overrides]
}
