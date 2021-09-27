import { ExceptionClassName } from '@packages/exceptions/enums/exception-class-name.enum'
import { ExceptionCode } from '@packages/exceptions/enums/exception-code.enum'

/**
 * @file Type Definitions - ExceptionId
 * @module exceptions/types/ExceptionId
 */

/**
 * Exception names.
 */
export type ExceptionId =
  | keyof typeof ExceptionCode
  | keyof typeof ExceptionClassName
