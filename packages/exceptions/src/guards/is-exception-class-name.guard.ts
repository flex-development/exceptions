import ExceptionClassName from '@packages/exceptions/enums/exception-class-name.enum'
import ExceptionId from '@packages/exceptions/enums/exception-id.enum'

/**
 * @file Type Guards - isExceptionClassName
 * @module exceptions/guards/isExceptionClassName
 */

/**
 * Checks if `value` is a valid `ExceptionClassName`.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `ExceptionClassName`, `false` otherwise
 */
const isExceptionClassName = (value: any = {}): value is ExceptionClassName => {
  const ids = Object.values(ExceptionId)
  return ids.map(id => ExceptionClassName[id]).includes(value)
}

export default isExceptionClassName
