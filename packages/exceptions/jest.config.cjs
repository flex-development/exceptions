const { Config } = require('@jest/types')
const pkg = require('./package.json')

/**
 * @file Jest Configuration - Workspace
 * @see https://jestjs.io/docs/next/configuration
 * @see https://orlandobayo.com/blog/monorepo-testing-using-jest/
 */

const ROOT = `<rootDir>/${pkg.repository.directory}`

/** @type {Config.InitialOptions} */
const config = {
  ...require('../../jest.config.base.cjs'),
  displayName: pkg.name.split('/')[1],
  globals: {
    'ts-jest': {
      tsconfig: `${ROOT}/tsconfig.json`
    }
  },
  roots: ['<rootDir>/__mocks__', ROOT]
}

module.exports = config
