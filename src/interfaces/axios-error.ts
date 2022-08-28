/**
 * @file Interfaces - AxiosError
 * @module exceptions/interfaces/AxiosError
 */

import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { ClientRequest } from 'node:http'
import type { AxiosErrorJSON } from './axios-error-json'

/**
 * Error from Axios HTTP client.
 *
 * @see https://github.com/axios/axios/blob/v0.23.0/lib/core/createError.js
 *
 * @template Payload - Response data type
 * @template Data - Request data type
 *
 * @extends {Error}
 */
export interface AxiosError<Payload = any, Data = any> extends Error {
  readonly code?: string
  readonly config: AxiosRequestConfig<Data>
  readonly isAxiosError: boolean
  readonly request?: ClientRequest
  readonly response?: AxiosResponse<Payload, Data>
  toJSON(): AxiosErrorJSON<Data>
}
