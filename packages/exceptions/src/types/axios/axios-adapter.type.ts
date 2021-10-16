import type { ObjectPlain } from '@flex-development/tutils'
import type { AxiosPromise } from './axios-promise.type'
import type { AxiosRequestConfig } from './axios-request-config.type'

/**
 * @file Type Definitions - AxiosAdapter
 * @module exceptions/types/axios/AxiosAdapter
 */

/**
 * Function that allows custom request handling. Especially useful for testing.
 *
 * @template Payload - Response data type
 * @template Data - Request data type
 * @template Params - Request params type
 * @template Dataform - Request transformer data type
 * @template DataformReturn - Request transformer return type
 * @template Resform - Response transformer data type
 * @template ResformReturn - Response transformer return type
 *
 * @see https://github.com/axios/axios#request-config
 */
export type AxiosAdapter<
  Payload = any,
  Data = any,
  Params extends ObjectPlain = ObjectPlain,
  Dataform = Data,
  DataformReturn = any,
  Resform = any,
  ResformReturn = Payload
> = {
  (
    config: AxiosRequestConfig<
      Data,
      Params,
      Dataform,
      DataformReturn,
      Resform,
      ResformReturn
    >
  ): AxiosPromise<Payload>
}
