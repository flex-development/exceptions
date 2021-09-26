import type { AxiosResponse } from './axios-response.type'

/**
 * @file Type Definitions - AxiosPromise
 * @module exceptions/types/axios/AxiosPromise
 */

/**
 * Promise containing an `AxiosResponse`.
 *
 * @template T - Response data type
 */
export type AxiosPromise<T = any> = Promise<AxiosResponse<T>>
