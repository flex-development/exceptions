import type { AxiosAdapter } from './axios-adapter.type'
import type { AxiosBasicCredentials } from './axios-basic-credentials.type'
import type { AxiosCancelToken } from './axios-cancel-token.type'
import type { AxiosProxyConfig } from './axios-proxy-config.type'
import type { AxiosTransformer } from './axios-transformer.type'
import type { Method } from './method.type'
import type { ResponseType } from './response-type.type'

/**
 * @file Type Definitions - AxiosRequestConfig
 * @module exceptions/types/axios/AxiosRequestConfig
 */

/**
 * Axios [request configuration][1].
 *
 * [1]: https://github.com/axios/axios#request-config
 */
export type AxiosRequestConfig = {
  adapter?: AxiosAdapter
  auth?: AxiosBasicCredentials
  baseURL?: string
  cancelToken?: AxiosCancelToken
  data?: any
  decompress?: boolean
  headers?: any
  httpAgent?: any
  httpsAgent?: any
  maxBodyLength?: number
  maxContentLength?: number
  maxRedirects?: number
  method?: Method
  onDownloadProgress?: (progressEvent: any) => void
  onUploadProgress?: (progressEvent: any) => void
  params?: any
  paramsSerializer?: (params: any) => string
  proxy?: AxiosProxyConfig | false
  responseType?: ResponseType
  socketPath?: string | null
  timeout?: number
  timeoutErrorMessage?: string
  transformRequest?: AxiosTransformer | AxiosTransformer[]
  transformResponse?: AxiosTransformer | AxiosTransformer[]
  url?: string
  validateStatus?: ((status: number) => boolean) | null
  withCredentials?: boolean
  xsrfCookieName?: string
  xsrfHeaderName?: string
}
