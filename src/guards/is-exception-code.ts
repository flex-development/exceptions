/**
 * @file Type Guards - isExceptionCode
 * @module exceptions/guards/isExceptionCode
 */

import ExceptionCode from '#src/enums/exception-code'
import ExceptionId from '#src/enums/exception-id'

/**
 * Checks if `value` is a valid `ExceptionCode`.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `ExceptionCode`, `false` otherwise
 */
const isExceptionCode = (value: any = {}): value is ExceptionCode => {
  return Object.values(ExceptionId)
    .map(id => ExceptionCode[id])
    .includes(value as ExceptionCode)
}

export default isExceptionCode
