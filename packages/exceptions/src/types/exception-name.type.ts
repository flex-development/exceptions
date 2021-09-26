import { ExceptionClassName } from '@packages/exceptions/enums/exception-class-name.enum'
import { ExceptionStatusCode } from '@packages/exceptions/enums/exception-status-code.enum'

/**
 * @file Type Definitions - ExceptionName
 * @module exceptions/types/ExceptionName
 */

/**
 * Exception names.
 */
export type ExceptionName =
  | keyof typeof ExceptionStatusCode
  | keyof typeof ExceptionClassName
