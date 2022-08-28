/**
 * @file Type Guards - isExceptionClassName
 * @module exceptions/guards/isExceptionClassName
 */

import ExceptionClassName from 'src/enums/exception-class-name.enum'
import ExceptionId from 'src/enums/exception-id.enum'

/**
 * Checks if `value` is a valid `ExceptionClassName`.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `ExceptionClassName`, `false` otherwise
 */
const isExceptionClassName = (value: any = {}): value is ExceptionClassName => {
  return Object.values(ExceptionId)
    .map(id => ExceptionClassName[id])
    .includes(value as ExceptionClassName)
}

export default isExceptionClassName
