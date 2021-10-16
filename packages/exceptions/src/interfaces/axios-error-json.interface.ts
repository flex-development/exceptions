import type ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import type { AxiosRequestConfig } from 'axios'

/**
 * @file Interfaces - AxiosErrorJSON
 * @module exceptions/interfaces/AxiosErrorJSON
 */

/**
 * JSON representation of an `AxiosError`.
 *
 * @see https://github.com/axios/axios/blob/v0.23.0/lib/core/enhanceError.js
 *
 * @template Data - Request data type
 *
 * @extends {Error}
 */
export interface AxiosErrorJSON<Data = any> extends Error {
  readonly code?: string
  readonly columnNumber?: number
  readonly config: AxiosRequestConfig<Data>
  readonly description?: string
  readonly fileName: string
  readonly lineNumber?: number
  readonly number?: number
  readonly status: ExceptionCode | null
}
