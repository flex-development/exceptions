/**
 * @file Configuration - Build
 * @module config/build
 * @see https://github.com/flex-development/mkbuild
 */

import { defineBuildConfig, type Config } from '@flex-development/mkbuild'
import pkg from './package.json' assert { type: 'json' }

/**
 * Build configuration options.
 *
 * @const {Config} config
 */
const config: Config = defineBuildConfig({
  conditions: ['import', 'require', 'default'],
  entries: [{}, { format: 'cjs' }],
  sourcemap: true,
  sourcesContent: false,
  target: 'node' + pkg.engines.node.replace(/^\D+/, ''),
  tsconfig: 'tsconfig.build.json'
})

export default config
