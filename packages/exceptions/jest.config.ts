import type { Config } from '@jest/types'
import baseConfig from '../../jest.config.base'
import pkg from './package.json'

/**
 * @file Jest Project Configuration
 * @see https://jestjs.io/docs/next/configuration
 * @see https://orlandobayo.com/blog/monorepo-testing-using-jest/
 */

const ROOT = `<rootDir>/${pkg.repository.directory}`

const config: Config.InitialOptions = {
  ...(baseConfig as Config.InitialOptions),
  displayName: pkg.name.split('/')[1],
  globals: {
    'ts-jest': {
      tsconfig: `${ROOT}/tsconfig.json`
    }
  },
  roots: ['<rootDir>/__mocks__', ROOT],
  testEnvironment: 'node'
}

export default config
