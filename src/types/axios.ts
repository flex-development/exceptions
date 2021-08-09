/**
 * @file Type Definitions - axios
 * @module exceptions/types/axios
 * @see https://github.com/axios/axios/blob/v0.21.1/index.d.ts
 */

export interface AxiosRequestConfig {
  adapter?: AxiosAdapter
  auth?: AxiosBasicCredentials
  baseURL?: string
  cancelToken?: CancelToken
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

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request?: any
}

interface AxiosAdapter {
  (config: AxiosRequestConfig): AxiosPromise<any>
}

interface AxiosBasicCredentials {
  username: string
  password: string
}

type AxiosPromise<T = any> = Promise<AxiosResponse<T>>

interface AxiosProxyConfig {
  host: string
  port: number
  auth?: {
    username: string
    password: string
  }
  protocol?: string
}

interface AxiosTransformer {
  (data: any, headers?: any): any
}

interface Cancel {
  message: string
}

interface CancelToken {
  promise: Promise<Cancel>
  reason?: Cancel
  throwIfRequested(): void
}

type Method =
  | 'DELETE'
  | 'GET'
  | 'HEAD'
  | 'LINK'
  | 'OPTIONS'
  | 'PATCH'
  | 'POST'
  | 'PURGE'
  | 'PUT'
  | 'UNLINK'
  | 'delete'
  | 'get'
  | 'head'
  | 'link'
  | 'options'
  | 'patch'
  | 'post'
  | 'purge'
  | 'put'
  | 'unlink'

type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'
