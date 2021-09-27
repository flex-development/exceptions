import ExceptionClassName from '@packages/exceptions/enums/exception-class-name.enum'
import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'

/**
 * @file Type Definitions - ExceptionId
 * @module exceptions/types/ExceptionId
 */

/**
 * HTTP error response status code names.
 *
 * @see https://developer.mozilla.org/docs/Web/HTTP/Status
 */
export type ExceptionId =
  | keyof typeof ExceptionCode
  | keyof typeof ExceptionClassName
