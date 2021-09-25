import logger from '@flex-development/grease/utils/logger.util'
import { LogLevel } from '@flex-development/log/enums/log-level.enum'
import type { ReplaceInFileConfig, ReplaceResult } from 'replace-in-file'
import replace from 'replace-in-file'

/**
 * @file Scripts - Prepack Enable
 * @module helpers/scripts/prepack-enable
 * @see https://github.com/adamreisnz/replace-in-file
 */

/**
 * @property {ReplaceInFileConfig} OPTIONS - Enable prepack options
 * @see https://github.com/adamreisnz/replace-in-file#custom-regular-expressions
 * @see https://github.com/adamreisnz/replace-in-file#replace-all-occurrences
 */
const OPTIONS: ReplaceInFileConfig = {
  files: [`${process.cwd()}/package.json`],
  from: '"_prepack":',
  to: '"prepack":'
}

/**
 * Enables `prepack` scripts.
 *
 * @see https://github.com/adamreisnz/replace-in-file
 *
 * @param {string} [message='enable prepack script'] - Message to log when done
 * @param {boolean} [dryRun=false] - Skip disabling prepack script
 * @return {ReplaceResult[]} Replacement results
 */
const prepackEnable = (
  message: string = 'enable prepack script',
  dryRun: boolean = false
): ReplaceResult[] => {
  let results: ReplaceResult[] = []

  try {
    if (!dryRun) results = replace.sync(OPTIONS)
  } catch (error) {
    logger({}, (error as Error).message, [], LogLevel.ERROR)
  }

  logger({}, message)
  return results
}

export default prepackEnable
