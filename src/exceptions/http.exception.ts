/**
 * @file Exceptions - HttpException
 * @module exceptions/exceptions/HttpException
 */

import type { HttpExceptionDTO } from '#src/dtos'
import { ClassName, Status, StatusName } from '#src/enums'
import { isClassName, isStatus, isStatusName } from '#src/guards'
import type { HttpExceptionJSON } from '#src/interfaces'
import type {
  JsonifiableObject,
  Nullable,
  ObjectPlain,
  OneOrMany
} from '@flex-development/tutils'
import { get, invert, set } from 'radash'
import Exception from './base.exception'

/**
 * HTTP exception model.
 *
 * @template T - Aggregated error type
 * @template Data - Exception data type
 * @template Cause - Exception cause type
 * @template Code - Exception code type
 *
 * @class
 * @extends {Exception<T,Data,Cause,Code>}
 */
class HttpException<
  T extends ObjectPlain = JsonifiableObject,
  Data extends ObjectPlain = JsonifiableObject,
  Cause extends ObjectPlain = JsonifiableObject,
  Code extends Nullable<number | string> = string
> extends Exception<T, Data, Cause, Code> {
  /**
   * CSS class name.
   *
   * @public
   * @readonly
   * @instance
   * @member {ClassName} classname
   */
  public readonly classname: ClassName

  /**
   * Exception status name.
   *
   * @public
   * @readonly
   * @instance
   * @member {StatusName} id
   */
  public readonly id: StatusName

  /**
   * Class instance name.
   *
   * @public
   * @override
   * @readonly
   * @instance
   * @member {string} name
   */
  public override readonly name: string

  /**
   * Status code.
   *
   * @public
   * @readonly
   * @instance
   * @member {Status} status
   */
  public readonly status: Status

  /**
   * Creates a new HTTP exception.
   *
   * @param {Nullable<Status>} [status=500] - Exception status code
   * @param {Nullable<string>} [message='Unknown error'] - Exception message
   * @param {HttpExceptionDTO<T, Cause, Code>} [dto={}] - Data transfer object
   * @param {Cause} [dto.cause] - Specific cause of exception
   * @param {OneOrMany<T>} [dto.errors] - Single error or aggregated errors
   * @param {string} [dto.stack=''] - Exception stack trace
   */
  constructor(
    status: Nullable<Status> = Status.INTERNAL_SERVER_ERROR,
    message: Nullable<string> = 'Unknown error',
    dto: HttpExceptionDTO<T, Cause, Code> = {}
  ) {
    super(message, dto)
    this.name = 'HttpException'
    this.status = get({ status }, 'status', Status.INTERNAL_SERVER_ERROR)!
    this.id = invert<StatusName, Status>(Status)[this.status]
    this.classname = ClassName[this.id]
  }

  /**
   * Checks if the given `value` is an {@linkcode HttpException} instance.
   *
   * @public
   * @static
   * @override
   *
   * @template T - Aggregated error type
   * @template Data - Exception data type
   * @template Cause - Exception cause type
   * @template Code - Exception code type
   *
   * @param {unknown} value - Value to check
   * @return {value is HttpException<T, Data, Cause, Code>} `true` if `value` is
   * {@linkcode HttpException} instance
   */
  public static override is<
    T extends ObjectPlain = JsonifiableObject,
    Data extends ObjectPlain = JsonifiableObject,
    Cause extends ObjectPlain = JsonifiableObject,
    Code extends Nullable<number | string> = string
  >(value: unknown): value is HttpException<T, Data, Cause, Code> {
    return value instanceof HttpException
  }

  /**
   * Checks if the given `value` is an {@linkcode HttpExceptionJSON} object.
   *
   * @public
   * @static
   * @override
   *
   * @template T - Aggregated error type
   * @template Data - Exception data type
   * @template Cause - Exception cause type
   * @template Code - Exception code type
   *
   * @param {unknown} value - Value to check
   * @return {value is HttpExceptionJSON<T, Data, Cause, Code>} `true` if
   * `value` is {@linkcode HttpExceptionJSON} object
   */
  public static override isJSON<
    T extends ObjectPlain = JsonifiableObject,
    Data extends ObjectPlain = JsonifiableObject,
    Cause extends ObjectPlain = JsonifiableObject,
    Code extends Nullable<number | string> = string
  >(value: unknown): value is HttpExceptionJSON<T, Data, Cause, Code> {
    return (
      super.isJSON(value) &&
      isClassName(get(value, 'classname')) &&
      isStatusName(get(value, 'name')) &&
      isStatus(get(value, 'status'))
    )
  }

  /**
   * Returns a JSON representation of @this.
   *
   * @public
   * @override
   *
   * @return {Readonly<HttpExceptionJSON<T, Data, Cause, Code>>} JSON object
   */
  public override toJSON(): Readonly<HttpExceptionJSON<T, Data, Cause, Code>> {
    /**
     * JSON representation of HTTP exception.
     *
     * @var {HttpExceptionJSON<T, Data, Cause, Code>} json
     */
    let json: HttpExceptionJSON<T, Data, Cause, Code> = {} as HttpExceptionJSON<
      T,
      Data,
      Cause,
      Code
    >

    // set exception json properties
    json = set(json, 'name', this.id)
    json = set(json, 'status', this.status)
    json = set(json, 'classname', this.classname)
    json = set(json, 'message', this.message)
    json = set(json, 'cause', Object.freeze(this.cause))
    json = set(json, 'data', Object.freeze(this.data))
    json = set(json, 'errors', Object.freeze(this.errors))

    return Object.freeze(json)
  }
}

export default HttpException
