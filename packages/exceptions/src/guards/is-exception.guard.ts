import type Exception from '@packages/exceptions/exceptions/base.exception'

/**
 * @file Type Guards - isException
 * @module exceptions/guards/isException
 */

/**
 * Checks if `error` is an `Exception` class object.
 *
 * @param {any} [error=new Error()] - Error to test
 * @return {boolean} `true` if `error` is `Exception`, `false` otherwise
 */
const isException = (error: any = new Error()): error is Exception => {
  return error?.toJSON?.()?.data?.isExceptionJSON === true ?? false
}

export default isException
