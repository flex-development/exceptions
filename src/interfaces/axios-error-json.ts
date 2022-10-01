/**
 * @file Interfaces - AxiosErrorJSON
 * @module exceptions/interfaces/AxiosErrorJSON
 */

import type ExceptionCode from '#src/enums/exception-code'
import type { AxiosRequestConfig } from 'axios'

/**
 * JSON representation of an `AxiosError`.
 *
 * @see https://github.com/axios/axios/blob/v0.23.0/lib/core/enhanceError.js
 *
 * @template Data - Request data type
 *
 * @extends {Error}
 */
interface AxiosErrorJSON<Data = any> extends Error {
  readonly code?: string
  readonly columnNumber?: number
  readonly config: AxiosRequestConfig<Data>
  readonly description?: string
  readonly fileName: string
  readonly lineNumber?: number
  readonly number?: number
  readonly status: ExceptionCode | null
}

export type { AxiosErrorJSON as default }
