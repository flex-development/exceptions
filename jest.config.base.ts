import type { Config } from '@jest/types'
import { jsWithTsESM as preset } from 'ts-jest/presets'
import { pathsToModuleNameMapper } from 'ts-jest/utils'
import NODE_MODULES from './tools/helpers/nm-string'
import { compilerOptions } from './tsconfig.json'

/**
 * @file Jest Configuration - Base
 * @see https://jestjs.io/docs/next/configuration
 * @see https://orlandobayo.com/blog/monorepo-testing-using-jest/
 */

const TYPE = 'e2e|functional|integration'
const prefix = '<rootDir>'

const config: Config.InitialOptions = {
  ...preset,
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
      useESM: true
    }
  },
  moduleDirectories: [NODE_MODULES],
  moduleFileExtensions: ['node', 'js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix }),
  prettierPath: `<rootDir>/${NODE_MODULES}/prettier`,
  reporters: ['default', 'jest-github-reporter'],
  rootDir: '../..',
  roots: ['<rootDir>/__mocks__', '<rootDir>/packages'],
  setupFiles: ['<rootDir>/__tests__/config/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/config/setup-after-env.ts'],
  testRegex: `(/__tests__/)(spec/(${TYPE}))?(.*)(${TYPE})?.spec.ts$`,
  testRunner: 'jest-jasmine2',
  verbose: true
}

export default config
