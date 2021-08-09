import type { ExceptionDataDTO as DataDTO } from '@/dto'
import { ExceptionClassName } from '@/enums/exception-class-name.enum'
import { ExceptionStatusCode } from '@/enums/exception-status-code.enum'
import { FirebaseErrorCode } from '@/enums/firebase-error-code.enum'
import { FirebaseErrorStatusCode } from '@/enums/firebase-error-status-code.enum'
import type {
  AxiosError,
  ExceptionJSON,
  FirebaseError,
  NextError
} from '@/interfaces'
import type {
  EmptyString,
  ExceptionErrors as Errors,
  ExceptionName as Name,
  PlainObject
} from '@/types'
import isPlainObject from 'lodash.isplainobject'
import omit from 'lodash.omit'
import { DEM } from './constants.exceptions'

/**
 * @file Exceptions - Exception Base Class
 * @module exceptions/exceptions/Exception
 */

export default class Exception extends Error {
  /**
   * @property {ExceptionClassName} className - Associated CSS class name
   */
  className: ExceptionClassName

  /**
   * @property {ExceptionStatusCode} code - HTTP error status code
   */
  code: ExceptionStatusCode

  /**
   * @property {Omit<DataDTO, 'errors'>} data - Additional exception data
   */
  data: Omit<DataDTO, 'errors'>

  /**
   * @property {Errors} errors - Array of errors, error object, or null
   */
  errors: Errors

  /**
   * @property {Name} errors - Name of Exception
   */
  name: Name

  /**
   * Instantiate a new Exception.
   *
   * @param {ExceptionStatusCode} [code] - HTTP error status code
   * @param {string} [message] - Exception message
   * @param {DataDTO} [data] - Additional exception data
   * @param {Errors} [data.errors] - Array of errors, error object, or null
   * @param {string} [data.message] - Overrides {@param message}
   * @param {string} [stack] - Error stack
   */
  constructor(
    code: ExceptionStatusCode = ExceptionStatusCode.INTERNAL_SERVER_ERROR,
    message: string = DEM,
    data: DataDTO = {},
    stack?: string
  ) {
    super()

    const $data = isPlainObject(data)
    const $errors = Array.isArray(data.errors) || isPlainObject(data.errors)

    this.code = Exception.formatCode(code)
    this.name = Exception.findNameByCode(this.code) as Name
    this.className = ExceptionClassName[this.name]
    this.data = $data ? omit(data, ['errors', 'message']) : {}
    this.errors = $errors ? data.errors || null : null
    this.message = data.message?.length ? data.message : message
    this.stack = stack
  }

  /**
   * Finds the name of an exception by status code.
   *
   * @param {ExceptionStatusCode} code - HTTP status code
   * @return {Name | EmptyString} - Name of exception or empty string
   */
  static findNameByCode(code: ExceptionStatusCode): Name | EmptyString {
    const name = Object.keys(ExceptionStatusCode).find(key => {
      return ExceptionStatusCode[key] === code
    })

    return (name as Name) || ''
  }

  /**
   * Returns `500` if {@param code} is not a valid exception status code.
   *
   * @param {any} [code] - Value to validate
   * @return {ExceptionStatusCode} Exception status code
   */
  static formatCode(code?: any): ExceptionStatusCode {
    return Object.values(ExceptionStatusCode).includes(code) ? code : 500
  }

  /**
   * Converts an AxiosError into an Exception.
   *
   * @param {AxiosError} error - HTTP error to transform
   * @return {Exception} AxiosError as Exception
   */
  static fromAxiosError(error: AxiosError): Exception {
    const { isAxiosError, message, request, response, stack } = error

    let code = ExceptionStatusCode.INTERNAL_SERVER_ERROR
    let data: PlainObject = { code: error.toJSON().code, isAxiosError }

    // Request was made and an error response was received
    if (response) {
      const { data: $data } = response

      if (Object.keys(ExceptionStatusCode).includes($data?.name ?? '')) {
        const ejson = $data as ExceptionJSON
        const data = { ...ejson.data, errors: ejson.errors }

        return new Exception(ejson.code, ejson.message, data, stack)
      }

      const msg = typeof $data === 'string' ? $data : $data?.message

      code = response.status
      data = { ...data, data: $data, headers: response.headers, message: msg }
    }

    // Request was made but no response was received
    if (!response && request) {
      data = { ...data, $message: message, message: 'No response received.' }
    }

    return new Exception(code, message, data, stack)
  }

  /**
   * Converts a FirebaseError into an Exception.
   *
   * @param {FirebaseError} error - Firebase error to transform
   * @return {Exception} FirebaseError as Exception
   */
  static fromFirebaseError(error: FirebaseError): Exception {
    const { code, message, stack } = error
    const { 1: ecode } = code.split('/')

    const isFirebaseError = true

    const ecode_names = Object.keys(FirebaseErrorCode)
    const name = ecode_names.find(name => FirebaseErrorCode[name] === ecode)
    const status = FirebaseErrorStatusCode[name as string] || 500

    return new Exception(status, message, { code, isFirebaseError }, stack)
  }

  /**
   * Converts a Next.js error into an Exception.
   *
   * @param {NextError} error - Next.js page error to transform
   * @return {Exception} NextError as Exception
   */
  static fromNextError(error: NextError): Exception {
    const { message, stack, statusCode } = error

    return new Exception(statusCode, message, { isNextError: true }, stack)
  }

  /**
   * Returns a JSON object representing the current Exception.
   *
   * @return {ExceptionJSON} JSON object representing Exception
   */
  toJSON(): ExceptionJSON {
    /* eslint-disable sort-keys */

    return {
      name: this.name,
      message: this.message,
      code: this.code,
      className: this.className,
      data: this.data,
      errors: this.errors
    }

    /* eslint-enable sort-keys */
  }
}
