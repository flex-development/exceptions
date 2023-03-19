/**
 * @file Interfaces - ExceptionJSON
 * @module exceptions/interfaces/ExceptionJSON
 */

import type { Errors } from '#src/types'
import type {
  JsonifiableObject,
  Nullable,
  ObjectPlain
} from '@flex-development/tutils'

/**
 * JSON representation of an `Exception`.
 *
 * @template T - Aggregated error type
 * @template Data - Exception data type
 * @template Cause - Exception cause type
 * @template Code - Exception code type
 */
interface ExceptionJSON<
  T extends ObjectPlain = JsonifiableObject,
  Data extends ObjectPlain = JsonifiableObject,
  Cause extends ObjectPlain = JsonifiableObject,
  Code extends Nullable<number | string> = string
> {
  /**
   * Specific cause of the exception.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause
   */
  readonly cause: Readonly<Cause & { code: Code }>

  /**
   * Custom exception data.
   */
  readonly data: Data

  /**
   * Aggregated errors.
   */
  readonly errors: Errors<T> | Readonly<Errors<T>>

  /**
   * Exception message.
   */
  readonly message: string
}

export type { ExceptionJSON as default }
