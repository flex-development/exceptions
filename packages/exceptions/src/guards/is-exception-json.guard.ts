import type { ExceptionJSON } from '@packages/exceptions/interfaces'

/**
 * @file Type Guards - isExceptionJSON
 * @module exceptions/guards/isExceptionJSON
 */

/**
 * Checks if `value` is an `ExceptionJSON` object.
 *
 * @param {any} [value={}] - Value to check
 * @return {boolean} `true` if `error` is `ExceptionJSON`, `false` otherwise
 */
const isExceptionJSON = (value: any = {}): value is ExceptionJSON => {
  return value?.data?.isExceptionJSON === true ?? false
}

export default isExceptionJSON
