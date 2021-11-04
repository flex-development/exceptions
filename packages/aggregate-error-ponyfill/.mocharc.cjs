const path = require('path')
const baseConfig = require('../../.mocharc.base.cjs')

/**
 * @file Mocha Configuration - Workspace
 * @see https://mochajs.org/#command-line-usage
 * @see https://mochajs.org/#configuration-format
 */

const CWD = process.cwd()

/** @type {Mocha.MochaInstanceOptions} */
const config = {
  ...baseConfig,
  package: path.join(CWD, 'package.json'),
  require: [
    ...baseConfig.require,
    `${CWD}/__tests__/config/mocha-global-fixtures.ts`,
    `${CWD}/__tests__/config/mocha-root-hooks.ts`
  ],
  spec: `./${baseConfig.spec}`
}

module.exports = config
