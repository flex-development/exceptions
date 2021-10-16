const { Config } = require('@jest/types')
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { loadSync: tsconfigLoad } = require('tsconfig/dist/tsconfig')

/**
 * @file Jest Configuration - Base
 * @see https://jestjs.io/docs/next/configuration
 * @see https://orlandobayo.com/blog/monorepo-testing-using-jest/
 */

const NODE_MODULES = process.env.NODE_MODULES
const PROJECT_CWD = process.env.PROJECT_CWD
const TYPE = 'e2e|functional|integration'
const prefix = '<rootDir>'

const { compilerOptions } = tsconfigLoad(PROJECT_CWD, 'tsconfig.json').config

/** @type {Config.InitialOptions} */
const config = {
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
      useESM: true
    }
  },
  moduleDirectories: [NODE_MODULES],
  moduleFileExtensions: ['cjs', 'js', 'json', 'mjs', 'node', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix }),
  preset: 'ts-jest/presets/js-with-ts-esm',
  prettierPath: `<rootDir>/${NODE_MODULES}/prettier`,
  reporters: ['default', 'jest-github-reporter'],
  resolver: '<rootDir>/tools/loaders/package-resolver.cjs',
  rootDir: '../..',
  roots: ['<rootDir>/__mocks__', '<rootDir>/packages'],
  setupFiles: ['<rootDir>/__tests__/config/setup.ts'],
  setupFilesAfterEnv: [
    'jest-extended/all',
    '<rootDir>/__tests__/config/setup-after-env.ts'
  ],
  testRegex: `(/__tests__/)(spec/(${TYPE}))?(.*)(${TYPE})?.spec.ts$`,
  testRunner: 'jest-jasmine2',
  transformIgnorePatterns: [],
  verbose: true
}

module.exports = config
