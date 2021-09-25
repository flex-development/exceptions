import type { ObjectPlain } from '@flex-development/tutils/types/ObjectPlain'
import { ExceptionClassName } from '@packages/exceptions/enums/exception-class-name.enum'
import { ExceptionStatusCode } from '@packages/exceptions/enums/exception-status-code.enum'

/**
 * @file Type Definitions - Utilities
 * @module exceptions/types/utils
 */

/**
 * Shape of `ExceptionJSON` `errors` property.
 */
export type ExceptionErrors = ObjectPlain | (ObjectPlain | string)[] | null

/**
 * Possible exception names.
 */
export type ExceptionName =
  | keyof typeof ExceptionStatusCode
  | keyof typeof ExceptionClassName

/**
 * Type representing an empty string.
 */
export type EmptyString = ''
