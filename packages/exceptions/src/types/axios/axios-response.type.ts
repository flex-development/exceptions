import type { ObjectPlain } from '@flex-development/tutils'
import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import type { ClientRequest } from 'http'
import type { AxiosRequestConfig } from './axios-request-config.type'
import type { Headers } from './headers.type'

/**
 * @file Type Definitions - AxiosResponse
 * @module exceptions/types/axios/AxiosResponse
 */

/**
 * Axios [response schema][1].
 *
 * [1]: https://github.com/axios/axios#response-schema
 *
 * @template Payload - Response data type
 * @template Data - Request data type
 * @template Params - Request params type
 * @template Dataform - Request transformer data type
 * @template DataformReturn - Request transformer return type
 * @template Resform - Response transformer data type
 * @template ResformReturn - Response transformer return type
 */
export type AxiosResponse<
  Payload extends any = any,
  Data extends any = any,
  Params extends ObjectPlain = ObjectPlain,
  Dataform extends any = Data,
  DataformReturn extends any = any,
  Resform extends any = any,
  ResformReturn extends any = Payload
> = {
  config: AxiosRequestConfig<
    Data,
    Params,
    Dataform,
    DataformReturn,
    Resform,
    ResformReturn
  >
  data: Payload
  headers: Headers
  request?: ClientRequest
  status: ExceptionCode
  statusText: string
}
