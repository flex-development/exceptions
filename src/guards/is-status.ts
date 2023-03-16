/**
 * @file Type Guards - isStatus
 * @module exceptions/guards/isStatus
 */

import { Status } from '#src/enums'
import { isUndefined } from '@flex-development/tutils'
import isStatusName from './is-status-name'

/**
 * Checks if the given `value` is an HTTP exception {@linkcode Status}.
 *
 * @param {unknown} value - Value to check
 * @return {value is Status} `true` if `value` is `Status`
 */
const isStatus = (value: unknown): value is Status => {
  return !isUndefined(
    Object.values(Status)
      .filter(value => !isStatusName(value))
      .find(status => status === value)
  )
}

export default isStatus
