import type { AxiosRequestConfig } from './axios-request-config.type'

/**
 * @file Type Definitions - AxiosResponse
 * @module exceptions/types/axios/AxiosResponse
 */

/**
 * Axios [response schema][1].
 *
 * [1]: https://github.com/axios/axios#response-schema
 *
 * @template T - Response data type
 */
export type AxiosResponse<T = any> = {
  config: AxiosRequestConfig
  data: T
  headers: any
  request?: any
  status: number
  statusText: string
}
