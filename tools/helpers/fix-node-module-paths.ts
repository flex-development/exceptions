import logger from '@flex-development/grease/utils/logger.util'
import LogLevel from '@flex-development/log/enums/log-level.enum'
import type { ReplaceInFileConfig, ReplaceResult } from 'replace-in-file'
import replace from 'replace-in-file'

/**
 * @file Helpers - Fix Node Module Import Paths
 * @module tools/helpers/fix-node-module-paths
 * @see https://github.com/adamreisnz/replace-in-file
 */

/**
 * @see https://github.com/adamreisnz/replace-in-file#custom-regular-expressions
 * @see https://github.com/adamreisnz/replace-in-file#replace-all-occurrences
 * @property {ReplaceInFileConfig} OPTIONS - Replacement options
 */
const OPTIONS: ReplaceInFileConfig = {
  files: ['./cjs/**/*', './esm/**/*', './types/**/*'],
  from: new RegExp(`(../.*)?(${process.env.NODE_MODULES}/)`, 'g'),
  to: ''
}

/**
 * Fixes all import paths that include the pattern `'node_modules'`.
 *
 * When using TypeScript `path` aliases, the pattern `'node_modules'` may
 * erroneously included in import paths. This is particularly an issue when
 * publishing packages.
 *
 * @see @link https://github.com/adamreisnz/replace-in-file
 *
 * @param {string} [message] - Success log message
 * @param {any[]} [args=[]] - Success log arguments
 * @return {ReplaceResult[]} Replacement results
 */
const fixNodeModulePaths = (
  message?: string,
  args: any[] = []
): ReplaceResult[] => {
  let results: ReplaceResult[] = []

  try {
    results = replace.sync(OPTIONS)
  } catch (error) {
    logger({}, (error as Error).message, [], LogLevel.ERROR)
  }

  if (message) logger({}, message, args)
  return results
}

export default fixNodeModulePaths
