import * as matchers from './matchers'

/**
 * @file Jest Global Setup Configuration
 * @module tests/setup
 * @see https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
 */

// Add custom matchers
expect.extend(matchers)

// Async callbacks must be invoked within 10 seconds
jest.setTimeout(10000)
