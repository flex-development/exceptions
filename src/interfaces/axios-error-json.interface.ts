/**
 * @file Interfaces - AxiosErrorJSON
 * @module exceptions/interfaces/AxiosErrorJSON
 */

import type { AxiosRequestConfig } from 'axios'
import type ExceptionCode from 'src/enums/exception-code.enum'

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
