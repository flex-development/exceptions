/**
 * @file Type Guards - isClassName
 * @module exceptions/guards/isClassName
 */

import { ClassName } from '#src/enums'
import { isUndefined } from '@flex-development/tutils'
import isStatusName from './is-status-name'

/**
 * Checks if the given `value` is a {@linkcode ClassName}.
 *
 * @param {unknown} value - Value to check
 * @return {value is ClassName} `true` if `value` is `ClassName`
 */
const isClassName = (value: unknown): value is ClassName => {
  return !isUndefined(
    Object.values(ClassName)
      .filter(value => !isStatusName(value))
      .find(classname => classname === value)
  )
}

export default isClassName
