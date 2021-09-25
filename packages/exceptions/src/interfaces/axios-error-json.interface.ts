import type { AxiosRequestConfig } from '@packages/exceptions/types'

/**
 * @file Interface - AxiosErrorJSON
 * @module exceptions/interfaces/AxiosErrorJSON
 */

/**
 * JSON representation of an `AxiosError`.
 */
export interface AxiosErrorJSON extends Error {
  readonly code: string
  readonly columnNumber?: number
  readonly config: AxiosRequestConfig
  readonly description?: string
  readonly fileName: string
  readonly lineNumber?: number
  readonly number?: number
}
