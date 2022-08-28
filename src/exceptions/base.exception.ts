/**
 * @file Exceptions - Exception Base Class
 * @module exceptions/exceptions/Exception
 */

import AggregateError from '@flex-development/aggregate-error-ponyfill'
import type { NullishString, OneOrMany } from '@flex-development/tutils'
import omit from 'lodash.omit'
import pick from 'lodash.pick'
import type { ExceptionDataDTO } from 'src/dtos'
import {
  ExceptionClassName,
  ExceptionCode,
  ExceptionId,
  FirebaseErrorCode,
  FirebaseErrorStatusCode
} from 'src/enums'
import { isExceptionCode, isExceptionJSON } from 'src/guards'
import type {
  AxiosError,
  AxiosErrorJSON,
  ExceptionJSON,
  FirebaseError,
  NextError
} from 'src/interfaces'
import type { ExceptionData, ExceptionErrors } from 'src/types'
import { DEM } from '../config/constants'

/**
 * Custom error class.
 *
 * @template T - Aggergated error type(s)
 *
 * @extends {AggregateError<T>}
 */
export default class Exception<T = any> extends AggregateError<T> {
  /**
   * @public
   * @readonly
   * @member {ExceptionClassName} className - CSS class name
   */
  public readonly className: ExceptionClassName

  /**
   * @public
   * @readonly
   * @member {ExceptionCode} code - HTTP error response status code
   */
  public readonly code: ExceptionCode

  /**
   * @public
   * @readonly
   * @member {ExceptionData} data - Custom error data
   */
  public readonly data: ExceptionData

  /**
   * @public
   * @readonly
   * @member {ExceptionErrors<T>} errors - Aggregated errors
   */
  public declare readonly errors: ExceptionErrors<T>

  /**
   * @public
   * @readonly
   * @member {ExceptionId} id - HTTP error response status code name
   */
  public readonly id: ExceptionId

  /**
   * @public
   * @override
   * @readonly
   * @member {'Exception'} name - `AggregateError` subclass name
   */
  // @ts-expect-error ts(2416)
  public override readonly name: 'Exception' = 'Exception'

  /**
   * Instantiates a new Exception.
   *
   * @param {ExceptionCode} [code=500] - HTTP error response status code
   * @param {NullishString} [message=DEM] - Exception message
   * @param {ExceptionDataDTO<T>} [data={}] - Custom error data
   * @param {OneOrMany<T>} [data.errors] - Single error or aggregated errors
   * @param {string} [data.message] - Custom message. Overrides `message`
   * @param {string} [stack=''] - Error stack
   */
  constructor(
    code: ExceptionCode = ExceptionCode.INTERNAL_SERVER_ERROR,
    message: NullishString = DEM,
    data: ExceptionDataDTO<T> = {},
    stack: string = ''
  ) {
    super([data.errors ?? []].flat() as T[], data.message ?? message ?? DEM)

    this.code = Exception.formatCode(code)
    this.data = omit(data, ['errors', 'message'])
    this.id = Exception.findIdByCode(this.code)
    this.className = ExceptionClassName[this.id]
    this.stack = stack

    // if data is actually ExceptionJSON, override previously set properties
    // note: errors and message is already set by super()
    if (isExceptionJSON(this.data)) {
      this.code = this.data.code
      this.className = this.data.className
      this.id = this.data.name
      this.data = this.data.data
    }
  }

  /**
   * Finds an {@link ExceptionId} by status code.
   *
   * If an id isn't found, `ExceptionId.INTERNAL_SERVER_ERROR` will be returned.
   *
   * @public
   * @static
   *
   * @param {ExceptionCode} code - HTTP status code
   * @return {ExceptionId} - Exception id
   */
  public static findIdByCode(code: ExceptionCode): ExceptionId {
    /**
     * Default exception id.
     *
     * @const {ExceptionId.INTERNAL_SERVER_ERROR} id
     */
    const id: ExceptionId.INTERNAL_SERVER_ERROR =
      ExceptionId.INTERNAL_SERVER_ERROR

    /**
     * Possible exception ids.
     *
     * @const {string[]} ids
     */
    const ids: string[] = Object.keys(ExceptionId)

    return (ids.find(id => ExceptionCode[id] === code) ?? id) as ExceptionId
  }

  /**
   * Returns `500` if `code` is not a valid `Exception` status code.
   *
   * @public
   * @static
   *
   * @param {any} [code] - Possible status code
   * @return {ExceptionCode} Exception status code
   */
  public static formatCode(code?: any): ExceptionCode {
    return isExceptionCode(code) ? code : ExceptionCode.INTERNAL_SERVER_ERROR
  }

  /**
   * Converts an `AxiosError` into an `Exception`.
   *
   * @see {@link AxiosError}
   *
   * @public
   * @static
   *
   * @template T - Aggergated error type(s)
   *
   * @param {AxiosError} error - Axios error to transform
   * @return {Exception<T>} AxiosError as Exception
   */
  public static fromAxiosError<T = any>(error: AxiosError): Exception<T> {
    const { isAxiosError = true, message, request, response, stack } = error

    // request was made and error response received was ExceptionJSON
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (response?.data?.data?.isExceptionJSON as boolean) {
      /**
       * Exception data.
       *
       * @const {ExceptionData} data
       */
      const data: ExceptionData = Object.assign({}, response!.data, {
        isAxiosError: true
      })

      return new Exception<T>(response!.status, message, data, stack)
    }

    /**
     * JSON representation of {@link error}.
     *
     * @const {AxiosErrorJSON} json
     */
    const json: AxiosErrorJSON = error.toJSON()

    /**
     * Exception status code.
     *
     * @var {ExceptionCode} code
     */
    let code: ExceptionCode = json.status ?? ExceptionCode.INTERNAL_SERVER_ERROR

    /**
     * Exception data.
     *
     * @const {ExceptionData} data
     */
    const data: ExceptionData = {
      code: json.code,
      config: json.config,
      isAxiosError
    }

    // request was made and unrecognized error response was received
    if (response) {
      const { headers, data: payload, status } = response

      // use response status as error code
      code = status

      // add response details to exception data
      data.headers = headers
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      data.message = typeof payload === 'string' ? payload : payload?.message
      data.payload = payload
    }

    // request was made, but no response was received
    if (!request) data.message = 'No response received.'
    else {
      data.request = pick(request, [
        'aborted',
        'code',
        'host',
        'path',
        'protocol'
      ])
    }

    return new Exception<T>(code, message, data, stack)
  }

  /**
   * Converts a `FirebaseError` into an Exception.
   *
   * @see {@link FirebaseError}
   *
   * @public
   * @static
   *
   * @template T - Aggergated error type(s)
   *
   * @param {FirebaseError} error - Firebase error to transform
   * @return {Exception<T>} FirebaseError as Exception
   */
  public static fromFirebaseError<T = any>(error: FirebaseError): Exception<T> {
    const { code, customData, message, stack } = error

    /**
     * Firebase error name.
     *
     * @const {string | undefined} name
     */
    const name: string | undefined = Object.keys(FirebaseErrorCode).find(k => {
      return FirebaseErrorCode[k] === code.split('/')[1]
    })

    /**
     * Exception status code.
     *
     * @const {ExceptionCode | FirebaseErrorStatusCode} status
     */
    const status: ExceptionCode | FirebaseErrorStatusCode = name
      ? this.formatCode(FirebaseErrorStatusCode[name])
      : FirebaseErrorStatusCode.UNKNOWN_ERROR

    /**
     * Exception data.
     *
     * @const {ExceptionData} data
     */
    const data: ExceptionData = { code, customData, isFirebaseError: true }

    return new Exception<T>(status as ExceptionCode, message, data, stack)
  }

  /**
   * Converts a Next.js error into an Exception.
   *
   * @public
   * @static
   *
   * @template T - Aggergated error type(s)
   *
   * @param {NextError} error - Next.js error to transform
   * @return {Exception<T>} NextError as Exception
   */
  public static fromNextError<T = any>(error: NextError): Exception<T> {
    /**
     * Exception data.
     *
     * @const {ExceptionData} data
     */
    const data: ExceptionData = { isNextError: true }

    return new Exception<T>(error.statusCode, error.message, data, error.stack)
  }

  /**
   * Returns a JSON representation of @this.
   *
   * @public
   * @static
   *
   * @return {Readonly<ExceptionJSON<T>>} JSON representation of @this
   */
  public toJSON(): Readonly<ExceptionJSON<T>> {
    return Object.freeze({
      /* eslint-disable sort-keys */
      name: this.id,
      message: this.message,
      code: this.code,
      className: this.className,
      data: Object.freeze({ ...this.data, isExceptionJSON: true }),
      errors: Object.freeze(this.errors)
    })
  }
}
