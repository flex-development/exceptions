/**
 * @file Data Transfer Objects - ExceptionDTO
 * @module exceptions/dtos/ExceptionDTO
 */

import type * as aggregate from '@flex-development/aggregate-error-ponyfill'
import type {
  JsonValue,
  JsonifiableArray,
  JsonifiableObject,
  Nilable,
  Nullable,
  ObjectPlain,
  ObjectUnknown,
  OneOrMany
} from '@flex-development/tutils'

/**
 * `Exception` data transfer object.
 *
 * @template T - Aggregated error type
 * @template Cause - Exception cause type
 * @template Code - Exception code type
 *
 * @extends {aggregate.Options<Cause>}
 */
interface ExceptionDTO<
  T extends ObjectPlain = JsonifiableObject,
  Cause extends ObjectPlain = JsonifiableObject,
  Code extends Nullable<number | string> = string
> extends aggregate.Options<Cause> {
  [key: string]:
    | JsonifiableArray
    | JsonifiableObject
    | JsonValue
    | ObjectUnknown
    | undefined

  /**
   * Exception code.
   *
   * @default null
   */
  code?: Nilable<Code>

  /**
   * Aggregated errors.
   *
   * @default []
   */
  errors?: OneOrMany<T> | undefined

  /**
   * Exception stack trace.
   *
   * @default ''
   */
  stack?: string | undefined
}

export type { ExceptionDTO as default }
