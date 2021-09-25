import type { Config } from '@jest/types'
import omit from 'lodash.omit'
import baseConfig from './jest.config.base'
import pkg from './package.json'

/**
 * @file Jest Root Configuration
 * @see https://jestjs.io/docs/next/configuration
 * @see https://orlandobayo.com/blog/monorepo-testing-using-jest/
 */

const config: Config.InitialOptions = {
  ...omit(baseConfig, ['rootDir']),
  displayName: pkg.name.split('/')[1],
  projects: ['<rootDir>/packages/*/jest.config.ts']
}

export default config
