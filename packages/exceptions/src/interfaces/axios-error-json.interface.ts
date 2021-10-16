import type { ObjectPlain } from '@flex-development/tutils'
import type ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import type { AxiosRequestConfig } from '@packages/exceptions/types/axios/axios-request-config.type'

/**
 * @file Interface - AxiosErrorJSON
 * @module exceptions/interfaces/AxiosErrorJSON
 */

/**
 * JSON representation of an `AxiosError`.
 *
 * @template Data - Request data type
 * @template Params - Request params type
 * @template Dataform - Request transformer data type
 * @template DataformReturn - Request transformer return type
 * @template Resform - Response transformer data type
 * @template ResformReturn - Response transformer return type
 *
 * @see https://github.com/axios/axios/blob/v0.21.4/lib/core/enhanceError.js
 */
export interface AxiosErrorJSON<
  Data = any,
  Params extends ObjectPlain = ObjectPlain,
  Dataform = Data,
  DataformReturn = any,
  Resform = any,
  ResformReturn = any
> extends Error {
  readonly code?: string
  readonly columnNumber?: number
  readonly config: AxiosRequestConfig<
    Data,
    Params,
    Dataform,
    DataformReturn,
    Resform,
    ResformReturn
  >
  readonly description?: string
  readonly fileName: string
  readonly lineNumber?: number
  readonly number?: number
  readonly status: ExceptionCode | null
}
