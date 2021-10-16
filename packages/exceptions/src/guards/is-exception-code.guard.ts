import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import ExceptionId from '@packages/exceptions/enums/exception-id.enum'

/**
 * @file Type Guards - isExceptionCode
 * @module exceptions/guards/isExceptionCode
 */

/**
 * Checks if `value` is a valid `ExceptionCode`.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `ExceptionCode`, `false` otherwise
 */
const isExceptionCode = (value: any = {}): value is ExceptionCode => {
  const ids = Object.values(ExceptionId)
  return ids.map(id => ExceptionCode[id]).includes(value)
}

export default isExceptionCode
