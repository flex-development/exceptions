/**
 * @file Exceptions - Exception
 * @module exceptions/exceptions/Exception
 */

import type { ExceptionDTO } from '#src/dtos'
import type { ExceptionJSON } from '#src/interfaces'
import AggregateError from '@flex-development/aggregate-error-ponyfill'
import {
  isNull,
  isNumber,
  isObjectPlain,
  isString,
  type JsonifiableObject,
  type Nullable,
  type OneOrMany
} from '@flex-development/tutils'
import { get, set, shake } from 'radash'

/**
 * Custom exception model.
 *
 * @template T - Aggregated error type
 * @template Data - Exception data type
 * @template Cause - Exception cause type
 * @template Code - Exception code type
 *
 * @class
 * @extends {AggregateError<T,Cause&{code:Code}>}
 */
class Exception<
  T extends JsonifiableObject = JsonifiableObject,
  Data extends JsonifiableObject = JsonifiableObject,
  Cause extends JsonifiableObject = JsonifiableObject,
  Code extends Nullable<number | string> = string
> extends AggregateError<T, Cause & { code: Code }> {
  /**
   * Specific cause of the exception.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause
   *
   * @public
   * @readonly
   * @instance
   * @member {Cause & { code: Code }} cause
   */
  public declare readonly cause: Cause & { code: Code }

  /**
   * Exception code.
   *
   * @public
   * @readonly
   * @instance
   * @member {Code} code
   */
  public readonly code: Code

  /**
   * Custom exception data.
   *
   * @public
   * @readonly
   * @instance
   * @member {Data} data
   */
  public readonly data: Data

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
   * Exception stack trace.
   *
   * @public
   * @instance
   * @member {string} stack
   */
  public declare stack: string

  /**
   * Creates a new exception.
   *
   * @param {Nullable<string>} [message='Unknown error'] - Exception message
   * @param {ExceptionDTO<T, Cause, Code>} [dto={}] - Data transfer object
   * @param {Cause} [dto.cause] - Specific cause of exception
   * @param {Nullable<Code>} [dto.code] - Exception code
   * @param {OneOrMany<T>} [dto.errors] - Single error or aggregated errors
   * @param {string} [dto.stack=''] - Exception stack trace
   */
  constructor(
    message: Nullable<string> = 'Unknown error',
    {
      cause = {} as Cause,
      code = null,
      errors = [],
      stack = '',
      ...data
    }: ExceptionDTO<T, Cause, Code> = {}
  ) {
    super([errors].flat() as T[], message ?? 'Unknown error', {
      cause: Object.assign(cause, { code: code as Code })
    })

    // set instance properties
    this.code = this.cause.code
    this.data = shake(data) as Data
    this.name = 'Exception'

    // capture stack trace
    stack
      ? /* c8 ignore next */ (this.stack = stack)
      : AggregateError.captureStackTrace(this, this.constructor)
  }

  /**
   * Checks if the given `value` is an {@linkcode Exception} instance.
   *
   * @public
   * @static
   *
   * @template T - Aggregated error type
   * @template Data - Exception data type
   * @template Cause - Exception cause type
   * @template Code - Exception code type
   *
   * @param {unknown} value - Value to check
   * @return {value is Exception<T, Data, Cause, Code>} `true` if `value` is
   * {@linkcode Exception} instance
   */
  public static is<
    T extends JsonifiableObject = JsonifiableObject,
    Data extends JsonifiableObject = JsonifiableObject,
    Cause extends JsonifiableObject = JsonifiableObject,
    Code extends Nullable<number | string> = string
  >(value: unknown): value is Exception<T, Data, Cause, Code> {
    return value instanceof Exception
  }

  /**
   * Checks if the given `value` is an {@linkcode ExceptionJSON} object.
   *
   * @public
   * @static
   *
   * @template T - Aggregated error type
   * @template Data - Exception data type
   * @template Cause - Exception cause type
   * @template Code - Exception code type
   *
   * @param {unknown} value - Value to check
   * @return {value is ExceptionJSON<T, Data, Cause, Code>} `true` if `value` is
   * {@linkcode ExceptionJSON} object
   */
  public static isJSON<
    T extends JsonifiableObject = JsonifiableObject,
    Data extends JsonifiableObject = JsonifiableObject,
    Cause extends JsonifiableObject = JsonifiableObject,
    Code extends Nullable<number | string> = string
  >(value: unknown): value is ExceptionJSON<T, Data, Cause, Code> {
    /**
     * Possible exception code.
     *
     * @const {unknown} code
     */
    const code: unknown = get(value, 'cause.code', [])

    return (
      (isNull(code) || isNumber(code) || isString(code)) &&
      isObjectPlain(get(value, 'cause')) &&
      isObjectPlain(get(value, 'data')) &&
      Array.isArray(get(value, 'errors')) &&
      isString(get(value, 'message'))
    )
  }

  /**
   * Returns a JSON representation of @this.
   *
   * @public
   *
   * @return {Readonly<ExceptionJSON<T, Data, Cause, Code>>} JSON object
   */
  public toJSON(): Readonly<ExceptionJSON<T, Data, Cause, Code>> {
    /**
     * JSON representation of exception.
     *
     * @var {ExceptionJSON<T, Data, Cause, Code>} json
     */
    let json: ExceptionJSON<T, Data, Cause, Code> = {} as ExceptionJSON<
      T,
      Data,
      Cause,
      Code
    >

    // set exception json properties
    json = set(json, 'message', this.message)
    json = set(json, 'cause', Object.freeze(this.cause))
    json = set(json, 'data', Object.freeze(this.data))
    json = set(json, 'errors', Object.freeze(this.errors))

    return Object.freeze(json)
  }
}

export default Exception
