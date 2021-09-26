import type { AxiosPromise } from './axios-promise.type'
import type { AxiosRequestConfig } from './axios-request-config.type'

/**
 * @file Type Definitions - AxiosAdapter
 * @module exceptions/types/axios/AxiosAdapter
 */

/**
 * Function that allows custom request handling. Especially useful for testing.
 *
 * @see https://github.com/axios/axios#request-config
 */
export type AxiosAdapter = {
  (config: AxiosRequestConfig): AxiosPromise<any>
}
