/**
 * @file Type Definitions - ResponseType
 * @module exceptions/types/axios/ResponseType
 */

/**
 * Type of data the server will respond with when a request is sent.
 *
 * @see https://github.com/axios/axios#request-config
 */
export type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'
