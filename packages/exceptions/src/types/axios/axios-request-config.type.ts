import type { ObjectPlain, OneOrMany } from '@flex-development/tutils'
import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import type { Agent as AgentHttp } from 'http'
import type { Agent as AgentHttps } from 'https'
import type { AxiosAdapter } from './axios-adapter.type'
import type { AxiosBasicCredentials } from './axios-basic-credentials.type'
import type { AxiosCancelToken } from './axios-cancel-token.type'
import type { AxiosProxyConfig } from './axios-proxy-config.type'
import type { AxiosTransformer } from './axios-transformer.type'
import type { Headers } from './headers.type'
import type { Method } from './method.type'
import type { ResponseType } from './response-type.type'
import type { TransitionalOptions } from './transitional-options.type'

/**
 * @file Type Definitions - AxiosRequestConfig
 * @module exceptions/types/axios/AxiosRequestConfig
 */

/**
 * Axios [request configuration][1].
 *
 * @template Data - Request data type
 * @template Params - Request params type
 * @template Dataform - Request transformer data type
 * @template DataformReturn - Request transformer return type
 * @template Resform - Response transformer data type
 * @template ResformReturn - Response transformer return type
 *
 * [1]: https://github.com/axios/axios#request-config
 */
export type AxiosRequestConfig<
  Data = any,
  Params extends ObjectPlain = ObjectPlain,
  Dataform = Data,
  DataformReturn = any,
  Resform = any,
  ResformReturn = any
> = {
  adapter?: AxiosAdapter
  auth?: AxiosBasicCredentials
  baseURL?: string
  cancelToken?: AxiosCancelToken
  data?: Data
  decompress?: boolean
  headers?: Headers
  httpAgent?: AgentHttp
  httpsAgent?: AgentHttps
  maxBodyLength?: number
  maxContentLength?: number
  maxRedirects?: number
  method?: Method
  onDownloadProgress?: (progressEvent: ProgressEvent) => void
  onUploadProgress?: (progressEvent: ProgressEvent) => void
  params?: Params
  paramsSerializer?: (params: Params) => string
  proxy?: AxiosProxyConfig | false
  responseType?: ResponseType
  socketPath?: string | null
  timeout?: number
  timeoutErrorMessage?: string
  transformRequest?: OneOrMany<AxiosTransformer<Dataform, DataformReturn>>
  transformResponse?: OneOrMany<AxiosTransformer<Resform, ResformReturn>>
  transitional?: TransitionalOptions
  url?: string
  validateStatus?: ((status: ExceptionCode) => boolean) | null
  withCredentials?: boolean
  xsrfCookieName?: string
  xsrfHeaderName?: string
}
