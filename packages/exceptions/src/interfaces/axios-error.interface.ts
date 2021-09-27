import type { ObjectPlain } from '@flex-development/tutils'
import type { AxiosRequestConfig } from '@packages/exceptions/types/axios/axios-request-config.type'
import type { AxiosResponse } from '@packages/exceptions/types/axios/axios-response.type'
import type { ClientRequest } from 'http'
import type { AxiosErrorJSON } from './axios-error-json.interface'

/**
 * @file Interface - AxiosError
 * @module exceptions/interfaces/AxiosError
 */

/**
 * Error from Axios HTTP client.
 *
 * @template Payload - Response data type
 * @template Data - Request data type
 * @template Params - Request params type
 * @template Dataform - Request transformer data type
 * @template DataformReturn - Request transformer return type
 * @template Resform - Response transformer data type
 * @template ResformReturn - Response transformer return type
 *
 * @see https://github.com/axios/axios/blob/v0.21.4/lib/core/createError.js
 */
export interface AxiosError<
  Payload extends any = any,
  Data extends any = any,
  Params extends ObjectPlain = ObjectPlain,
  Dataform extends any = Data,
  DataformReturn extends any = any,
  Resform extends any = any,
  ResformReturn extends any = Payload
> extends Error {
  readonly code?: string
  readonly config: AxiosRequestConfig<
    Data,
    Params,
    Dataform,
    DataformReturn,
    Resform,
    ResformReturn
  >
  readonly isAxiosError: boolean
  readonly request?: ClientRequest
  readonly response?: AxiosResponse<
    Payload,
    Data,
    Params,
    Dataform,
    DataformReturn,
    Resform,
    ResformReturn
  >
  readonly toJSON: () => AxiosErrorJSON<
    Data,
    Params,
    Dataform,
    DataformReturn,
    Resform,
    ResformReturn
  >
}
