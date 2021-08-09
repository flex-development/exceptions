import type { AxiosRequestConfig, AxiosResponse } from '@/types'
import type { AxiosErrorJSON } from './axios-error-json.interface'

/**
 * @file Interface - AxiosError
 * @module exceptions/interfaces/AxiosError
 */

/**
 * Error from Axios HTTP client.
 */
export interface AxiosError<T = any> extends Error {
  readonly code?: string
  readonly config: AxiosRequestConfig
  readonly isAxiosError: boolean
  readonly request?: any
  readonly response?: AxiosResponse<T>
  readonly toJSON: () => AxiosErrorJSON
}
