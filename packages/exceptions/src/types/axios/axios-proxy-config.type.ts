import type { AxiosBasicCredentials } from './axios-basic-credentials.type'

/**
 * @file Type Definitions - AxiosProxyConfig
 * @module exceptions/types/axios/AxiosProxyConfig
 */

/**
 * Object used to define the hostname, port, and protocol of a proxy server.
 *
 * @see https://github.com/axios/axios#request-config
 */
export type AxiosProxyConfig = {
  auth?: AxiosBasicCredentials
  host: string
  port: number
  protocol?: string
}
