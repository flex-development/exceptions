/**
 * @file Interfaces - HttpExceptionJSON
 * @module exceptions/interfaces/HttpExceptionJSON
 */

import type { ClassName, Status, StatusName } from '#src/enums'
import type { JsonifiableObject, Nullable } from '@flex-development/tutils'
import type ExceptionJSON from './exception-json'

/**
 * JSON representation of an `HttpException`.
 *
 * @template T - Aggregated error type
 * @template Data - Exception data type
 * @template Cause - Exception cause type
 * @template Code - Exception code type
 *
 * @extends {ExceptionJSON<T,Data,Cause,Code>}
 */
interface HttpExceptionJSON<
  T extends JsonifiableObject = JsonifiableObject,
  Data extends JsonifiableObject = JsonifiableObject,
  Cause extends JsonifiableObject = JsonifiableObject,
  Code extends Nullable<number | string> = string
> extends ExceptionJSON<T, Data, Cause, Code> {
  /**
   * CSS class name.
   */
  readonly classname: ClassName

  /**
   * Exception status name.
   */
  readonly name: StatusName

  /**
   * Exception status code.
   */
  readonly status: Status
}

export type { HttpExceptionJSON as default }
