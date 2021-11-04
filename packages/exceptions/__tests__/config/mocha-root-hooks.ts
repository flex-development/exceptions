import type { RootHookObject } from 'mocha'

/**
 * @file Workspace Test Configuration - Root Hooks
 * @module exceptions/tests/config/mochaHooks
 * @see https://mochajs.org/#defining-a-root-hook-plugin
 */

export const mochaHooks: RootHookObject = {
  /**
   * Handles the test environment after all tests are run.
   *
   * @return {void} Nothing when complete
   */
  afterAll(): void {
    return
  },

  /**
   * Handles the test environment after each test is run.
   *
   * @return {void} Nothing when complete
   */
  afterEach(): void {
    return
  },

  /**
   * Handles the test environment before any tests are run.
   *
   * @return {void} Nothing when complete
   */
  beforeAll(): void {
    return
  },

  /**
   * Handles the test environment before each test runs.
   *
   * @return {void} Nothing when complete
   */
  beforeEach(): void {
    return
  }
}
