import chai, { expect } from 'chai'
import { format } from 'pretty-format'

/**
 * @file Global Test Configuration - Mocha Global Fixtures
 * @module tests/config/mochaGlobalFixtures
 * @see https://mochajs.org/#global-setup-fixtures
 * @see https://mochajs.org/#global-teardown-fixtures
 */

// Update global namespace
global.chai = chai
global.expect = expect
global.pf = format

/**
 * Prepares the global test environment.
 *
 * @return {void} Nothing when complete
 */
export const mochaGlobalSetup = (): void => {
  return
}

/**
 * Cleanups the global test environment.
 *
 * @return {void} Nothing when complete
 */
export const mochaGlobalTeardown = (): void => {
  return
}
