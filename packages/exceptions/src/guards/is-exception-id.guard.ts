import ExceptionId from '@packages/exceptions/enums/exception-id.enum'

/**
 * @file Type Guards - isExceptionId
 * @module exceptions/guards/isExceptionId
 */

/**
 * Checks if `value` is a valid `ExceptionId`.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `ExceptionId`, `false` otherwise
 */
const isExceptionId = (value: any = {}): value is ExceptionId => {
  return Object.keys(ExceptionId).includes(value)
}

export default isExceptionId
