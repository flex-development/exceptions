import type { ObjectPlain } from '@flex-development/tutils'
import type { AxiosResponse } from './axios-response.type'

/**
 * @file Type Definitions - AxiosPromise
 * @module exceptions/types/axios/AxiosPromise
 */

/**
 * Promise containing an `AxiosResponse`.
 *
 * @template Payload - Response data type
 * @template Data - Request data type
 * @template Params - Request params type
 * @template Dataform - Request transformer data type
 * @template DataformReturn - Request transformer return type
 * @template Resform - Response transformer data type
 * @template ResformReturn - Response transformer return type
 */
export type AxiosPromise<
  Payload = any,
  Data = any,
  Params extends ObjectPlain = ObjectPlain,
  Dataform = Data,
  DataformReturn = any,
  Resform = any,
  ResformReturn = Payload
> = Promise<
  AxiosResponse<
    Payload,
    Data,
    Params,
    Dataform,
    DataformReturn,
    Resform,
    ResformReturn
  >
>
