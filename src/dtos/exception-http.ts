/**
 * @file Data Transfer Objects - HttpExceptionDTO
 * @module exceptions/dtos/HttpExceptionDTO
 */

import type { JsonifiableObject, Nullable } from '@flex-development/tutils'
import type ExceptionDTO from './exception'

/**
 * `HttpException` data transfer object.
 *
 * @template T - Aggregated error type
 * @template Cause - Exception cause type
 * @template Code - Exception code type
 *
 * @extends {ExceptionDTO<T,Cause>}
 */
interface HttpExceptionDTO<
  T extends JsonifiableObject = JsonifiableObject,
  Cause extends JsonifiableObject = JsonifiableObject,
  Code extends Nullable<number | string> = string
> extends ExceptionDTO<T, Cause, Code> {}

export type { HttpExceptionDTO as default }
