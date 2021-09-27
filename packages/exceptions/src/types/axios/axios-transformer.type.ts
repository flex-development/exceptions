import type { Headers } from './headers.type'

/**
 * @file Type Definitions - AxiosTransformer
 * @module exceptions/types/axios/AxiosTransformer
 */

/**
 * Function that mutates request data before it is sent to the server or after
 * response data after its sent from the server.
 *
 * Only called when sending `DELETE`, `PATCH`, `POST`, or `PUT` requests.
 *
 * @template T - Response or request data type
 * @template R - Return data type
 *
 * @see https://github.com/axios/axios#request-config
 */
export type AxiosTransformer<T extends any = any, R extends any = any> = {
  (data: T, headers?: Headers): R
}
