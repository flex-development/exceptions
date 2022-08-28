/**
 * @file Type Guards - isExceptionId
 * @module exceptions/guards/isExceptionId
 */

import ExceptionId from 'src/enums/exception-id'

/**
 * Checks if `value` is a valid `ExceptionId`.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `ExceptionId`, `false` otherwise
 */
const isExceptionId = (value: any = {}): value is ExceptionId => {
  return Object.keys(ExceptionId).includes(value as ExceptionId)
}

export default isExceptionId
