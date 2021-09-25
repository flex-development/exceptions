import logger from '@flex-development/grease/utils/logger.util'
import { LogLevel } from '@flex-development/log/enums/log-level.enum'
import type { ReplaceInFileConfig, ReplaceResult } from 'replace-in-file'
import replace from 'replace-in-file'

/**
 * @file Scripts - Prepack Disable
 * @module helpers/scripts/prepack-disable
 * @see https://github.com/adamreisnz/replace-in-file
 */

/**
 * @property {ReplaceInFileConfig} OPTIONS - Disable prepack options
 * @see https://github.com/adamreisnz/replace-in-file#custom-regular-expressions
 * @see https://github.com/adamreisnz/replace-in-file#replace-all-occurrences
 */
const OPTIONS: ReplaceInFileConfig = {
  files: [`${process.cwd()}/package.json`],
  from: '"prepack":',
  to: '"_prepack":'
}

/**
 * Disables `prepack` scripts.
 *
 * @see https://github.com/adamreisnz/replace-in-file
 *
 * @param {string} [message='disable prepack script'] - Message to log when done
 * @param {boolean} [dryRun=false] - Skip disabling prepack script
 * @return {ReplaceResult[]} Replacement results
 */
const prepackDisable = (
  message: string = 'disable prepack script',
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

export default prepackDisable
