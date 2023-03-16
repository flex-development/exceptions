/**
 * @file Interfaces - ExceptionJSON
 * @module exceptions/interfaces/ExceptionJSON
 */

import type { Errors } from '#src/types'
import type { JsonifiableObject, Nullable } from '@flex-development/tutils'

/**
 * JSON representation of an `Exception`.
 *
 * @todo property documentation
 *
 * @template T - Aggregated error type
 * @template Data - Exception data type
 * @template Cause - Exception cause type
 * @template Code - Exception code type
 */
interface ExceptionJSON<
  T extends JsonifiableObject = JsonifiableObject,
  Data extends JsonifiableObject = JsonifiableObject,
  Cause extends JsonifiableObject = JsonifiableObject,
  Code extends Nullable<number | string> = string
> {
  readonly cause: Readonly<Cause & { code: Code }>
  readonly data: Data
  readonly errors: Errors<T> | Readonly<Errors<T>>
  readonly message: string
}

export type { ExceptionJSON as default }
