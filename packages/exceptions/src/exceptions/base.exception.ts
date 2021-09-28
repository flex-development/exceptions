import type { ObjectPlain } from '@flex-development/tutils'
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
   * Converts an AxiosError into an Exception.
   *
   * @template T - Error type
   *
   * @param {AxiosError} error - HTTP error to transform
   * @return {Exception<T>} AxiosError as Exception
   */
  static fromAxiosError<T extends any = any>(error: AxiosError): Exception<T> {
    const { isAxiosError, message, request, response, stack } = error

    let code = ExceptionCode.INTERNAL_SERVER_ERROR
    let data: ObjectPlain = { code: error.toJSON().code, isAxiosError }

    // Request was made and an error response was received
    if (response) {
      const { data: $data } = response

      if (Object.keys(ExceptionCode).includes($data?.name ?? '')) {
        const ejson = $data as ExceptionJSON<T>
        const data = { ...ejson.data, errors: ejson.errors }

        return new Exception<T>(ejson.code, ejson.message, data, stack)
      }

      const msg = typeof $data === 'string' ? $data : $data?.message

      code = response.status
      data = { ...data, data: $data, headers: response.headers, message: msg }
    }

    // Request was made but no response was received
    if (!response && request) {
      data = { ...data, $message: message, message: 'No response received.' }
    }

    return new Exception<T>(code, message, data, stack)
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
   * @return {ExceptionJSON<T>} JSON object representing Exception
   */
  toJSON(): ExceptionJSON<T> {
    /* eslint-disable sort-keys */

    return {
      name: this.id,
      message: this.message,
      code: this.code,
      className: this.className,
      data: this.data,
      errors: this.errors
    }

    /* eslint-enable sort-keys */
  }
}
