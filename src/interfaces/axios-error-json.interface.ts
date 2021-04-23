import type { AxiosRequestConfig } from 'axios'

/**
 * @file Interface - AxiosErrorJSON
 * @module interfaces/AxiosErrorJSON
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
