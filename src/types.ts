import { ExceptionClassName, ExceptionCode } from '@/enums'
import type { PlainObject } from 'simplytyped'

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
  | keyof typeof ExceptionCode
  | keyof typeof ExceptionClassName

/**
 * Type representing an empty string.
 */
export type EmptyString = ''
