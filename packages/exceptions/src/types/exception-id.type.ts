import { ExceptionClassName } from '@packages/exceptions/enums/exception-class-name.enum'
import { ExceptionStatusCode } from '@packages/exceptions/enums/exception-status-code.enum'

/**
 * @file Type Definitions - ExceptionId
 * @module exceptions/types/ExceptionId
 */

/**
 * Exception names.
 */
export type ExceptionId =
  | keyof typeof ExceptionStatusCode
  | keyof typeof ExceptionClassName
