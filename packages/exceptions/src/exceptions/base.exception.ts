import type { JSONObject } from '@flex-development/tutils'
import type { ExceptionDataDTO } from '@packages/exceptions/dtos'
import {
  ExceptionClassName,
  ExceptionCode,
  ExceptionId,
  FirebaseErrorCode,
  FirebaseErrorStatusCode
} from '@packages/exceptions/enums'
import type {
  AxiosError,
  ExceptionJSON,
  FirebaseError,
  NextError
} from '@packages/exceptions/interfaces'
import type { ExceptionData, ExceptionErrors } from '@packages/exceptions/types'
import omit from 'lodash.omit'
import pick from 'lodash.pick'
import { DEM } from './constants.exceptions'

/**
 * @file Exceptions - Exception Base Class
 * @module exceptions/exceptions/Exception
 */

/**
 * Custom error class.
 *
 * @template T - Error type
 *
 * @extends {AggregateError}
 */
// eslint-disable-next-line unicorn/custom-error-definition
export default class Exception<T extends any = any> extends AggregateError {
  /**
   * @property {ExceptionClassName} className - Associated CSS class name
   */
  className: ExceptionClassName

  /**
   * @property {ExceptionCode} code - HTTP error response status code
   */
  code: ExceptionCode

  /**
   * @property {ExceptionData} data - Additional exception data
   */
  data: ExceptionData

  /**
   * @property {ExceptionErrors<T>} errors - Aggregated errors
   */
  errors: ExceptionErrors<T>

  /**
   * @property {ExceptionId} id - HTTP error response status code name
   */
  id: ExceptionId

  /**
   * Instantiate a new Exception.
   *
   * @param {ExceptionCode} [code=500] - HTTP error response status code
   * @param {string} [message=DEM] - Exception message
   * @param {ExceptionDataDTO<T>} [data={}] - Additional exception data
   * @param {ExceptionErrors<T>} [data.errors] - Single error or group of errors
   * @param {string} [data.message] - Custom message. Overrides `message`
   * @param {string} [stack] - Error stack
   */
  constructor(
    code: ExceptionCode = ExceptionCode.INTERNAL_SERVER_ERROR,
    message: string = DEM,
    data: ExceptionDataDTO<T> = {},
    stack?: string
  ) {
    super([data.errors || []].flat(), data.message || message)

    this.name = 'Exception'
    this.code = Exception.formatCode(code)
    this.data = omit(data, ['errors', 'message'])
    this.id = Exception.findIdByCode(this.code)
    this.className = ExceptionClassName[this.id]
    this.stack = stack

    // If data is actually ExceptionJSON, override previously set properties
    // Note that errors and message is already set by super()
    ;((): void => {
      const data = this.data as Omit<ExceptionJSON<T>, 'errors' | 'message'>

      if (data?.data?.isExceptionJSON) {
        this.code = data.code
        this.className = data.className
        this.id = data.name
        this.data = data.data
      }
    })()
  }

  /**
   * Finds a HTTP error response status name by status code.
   *
   * If the name isn't found, `INTERNAL_SERVER_ERROR` will be returned.
   *
   * @param {ExceptionCode} code - HTTP status code
   * @return {ExceptionId} - Name of exception or empty string
   */
  static findIdByCode(code: ExceptionCode): ExceptionId {
    // Default Exception id
    const id = ExceptionId.INTERNAL_SERVER_ERROR

    // Get Exception IDs
    const ids = Object.keys(ExceptionId) as unknown as ExceptionId[]

    // Return HTTP error response status id or default id
    return ids.find(id => ExceptionCode[id as unknown as string] === code) || id
  }

  /**
   * Returns `500` if `code` is not a valid `Exception` status code.
   *
   * @param {any} [code] - Possible status code
   * @return {ExceptionCode} Exception status code
   */
  static formatCode(code?: any): ExceptionCode {
    // Get status codes
    const codes = Object.values(ExceptionId).map(id => ExceptionCode[id])

    // Return original status code if found, default status code otherwise
    return codes.includes(code) ? code : ExceptionCode.INTERNAL_SERVER_ERROR
  }

  /**
   * Converts an `AxiosError` into an `Exception`.
   *
   * @template T - Error type
   *
   * @param {AxiosError} error - HTTP error to transform
   * @return {Exception<T>} AxiosError as Exception
   */
  static fromAxiosError<T extends any = any>(error: AxiosError): Exception<T> {
    // Spread error object
    const { isAxiosError = true, message, request, response, stack } = error

    // Request was made and error response received was ExceptionJSON
    if (response?.data?.data?.isExceptionJSON) {
      response.data.isAxiosError = true
      return new Exception<T>(response.status, message, response.data, stack)
    }

    // Get error as json
    const ejson = error.toJSON()

    // Init Exception code and additional data
    let code = ejson.status || ExceptionCode.INTERNAL_SERVER_ERROR
    let data: ExceptionData = {
      code: ejson.code,
      config: (() => {
        const config = pick(ejson.config, [
          'auth',
          'baseURL',
          'data',
          'headers',
          'method',
          'params',
          'proxy',
          'responseType',
          'timeout',
          'transitional',
          'url',
          'withCredentials'
        ])

        if (ejson.config.cancelToken) {
          const cancelToken = pick(ejson.config.cancelToken, 'reason')
          Object.assign(config, { cancelToken })
        }

        return config
      })(),
      isAxiosError
    }

    // Request was made and unrecognized error response was received
    if (response) {
      // Spread response
      const { headers, data: payload, status } = response

      // Use response status as error code
      code = status

      // Add response details to exception data
      data = {
        ...data,
        headers,
        message: typeof payload === 'string' ? payload : payload?.message,
        payload
      }
    }

    // Request was made, but no response was received
    if (!request) data = { ...data, message: 'No response received.' }
    else {
      data.request = pick(request, [
        'aborted',
        'code',
        'host',
        'path',
        'protocol'
      ]) as JSONObject
    }

    return new Exception<T>(code as number, message, data, stack)
  }

  /**
   * Converts a FirebaseError into an Exception.
   *
   * @template T - Error type
   *
   * @param {FirebaseError} error - Firebase error to transform
   * @return {Exception<T>} FirebaseError as Exception
   */
  static fromFirebaseError<T extends any = any>(
    error: FirebaseError
  ): Exception<T> {
    const { code, message, stack } = error
    const { 1: ecode } = code.split('/')

    const isFirebaseError = true

    const ecode_names = Object.keys(FirebaseErrorCode)
    const name = ecode_names.find(name => FirebaseErrorCode[name] === ecode)
    const status = FirebaseErrorStatusCode[name as string] || 500

    return new Exception<T>(status, message, { code, isFirebaseError }, stack)
  }

  /**
   * Converts a Next.js error into an Exception.
   *
   * @template T - Error type
   *
   * @param {NextError} error - Next.js page error to transform
   * @return {Exception<T>} NextError as Exception
   */
  static fromNextError<T extends any = any>(error: NextError): Exception<T> {
    const { message, stack, statusCode } = error

    return new Exception<T>(statusCode, message, { isNextError: true }, stack)
  }

  /**
   * Returns a JSON object representing the current Exception.
   *
   * To help identify JSON versions of `Exception` class objects, the `data`
   * property will have an `isExceptionJSON` property added to it.
   *
   * @return {Readonly<ExceptionJSON<T>>} JSON object representing Exception
   */
  toJSON(): Readonly<ExceptionJSON<T>> {
    const data = Object.freeze({ ...this.data, isExceptionJSON: true })

    /* eslint-disable sort-keys */

    return Object.freeze({
      name: this.id,
      message: this.message,
      code: this.code,
      className: this.className,
      data: data as ExceptionJSON<T>['data'],
      errors: Object.freeze(this.errors)
    })

    /* eslint-enable sort-keys */
  }
}
