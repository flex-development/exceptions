/**
 * @file Mocha Configuration - Base
 * @see https://mochajs.org/#command-line-usage
 * @see https://mochajs.org/#configuration-format
 */

const PWD = process.env.GITHUB_WORKSPACE
const TYPES = ['', 'e2e', 'functional', 'integration']

/** @type {Mocha.MochaInstanceOptions} */
const config = {
  allowUncaught: false,
  asyncOnly: false,
  bail: false,
  checkLeaks: true,
  color: true,
  diff: true,
  exit: true,
  extension: TYPES.map(type => `${type}.spec.ts`),
  failZero: false,
  forbidOnly: true,
  forbidPending: false,
  fullTrace: true,
  globals: ['chai', 'expect'],
  growl: !(require('is-ci') || process.env.GITHUB_ACTIONS === true),
  ignore: ['**/coverage/*', '**/node_modules/*'],
  inlineDiffs: true,
  isWorker: true,
  /** @see https://typestrong.org/ts-node/docs/recipes/mocha */
  loader: `${PWD}/tools/loaders/esm.mjs`,
  noHighlighting: false,
  nodeOption: [
    'experimental-json-modules',
    'es-module-specifier-resolution node'
  ],
  parallel: true,
  recursive: true,
  /** @see https://github.com/stanleyhlng/mocha-multi-reporters */
  reporter: 'mocha-multi-reporters',
  reporterOptions: [`configFile=${PWD}/__tests__/config/reporters.json`],
  require: [
    `${PWD}/__tests__/config/mocha-global-fixtures.ts`,
    `${PWD}/__tests__/config/mocha-root-hooks.ts`
  ],
  retries: 0,
  sort: false,
  spec: '{,!(coverage|node_modules)/**}/__tests__/*.spec.*',
  timeout: 2000,
  ui: 'bdd',
  watch: false
}

module.exports = config
