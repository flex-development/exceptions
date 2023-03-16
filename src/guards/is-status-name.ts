/**
 * @file Type Guards - isStatusName
 * @module exceptions/guards/isStatusName
 */

import { StatusName } from '#src/enums'
import { isUndefined } from '@flex-development/tutils'

/**
 * Checks if the given `value` is an {@linkcode StatusName}.
 *
 * @param {unknown} value - Value to check
 * @return {value is StatusName} `true` if `value` is `StatusName`
 */
const isStatusName = (value: unknown): value is StatusName => {
  return !isUndefined(Object.values(StatusName).find(id => id === value))
}

export default isStatusName
