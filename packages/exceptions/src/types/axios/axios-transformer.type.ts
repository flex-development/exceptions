/**
 * @file Type Definitions - AxiosTransformer
 * @module exceptions/types/axios/AxiosTransformer
 */

/**
 * Function that mutates request data before it is sent to the server.
 *
 * Only called when sending `DELETE`, `PATCH`, `POST`, or `PUT` requests.
 *
 * @see https://github.com/axios/axios#request-config
 */
export type AxiosTransformer = {
  (data: any, headers?: any): any
}
