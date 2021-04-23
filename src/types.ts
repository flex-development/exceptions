import { ExceptionClassName, ExceptionStatusCode } from '@/enums'

/**
 * @file Type Definitions
 * @module types
 */

/**
 * Shape of `ExceptionJSON` `errors` property.
 */
export type ExceptionErrors = PlainObject | (PlainObject | string)[] | null

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

/**
 * An object with string keys and values of type `any`.
 */
export type PlainObject = Record<string, any>
