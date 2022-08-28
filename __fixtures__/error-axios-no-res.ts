/**
 * @file Test Fixture - AxiosError (No Response)
 * @module fixtures/ERROR_AXIOS_NO_RES
 */

import type { AxiosRequestConfig } from 'axios'
import createError from 'axios/lib/core/createError'
import type { ClientRequest } from 'node:http'

const config: AxiosRequestConfig = { url: '^https:\\/\\/localhost:8080' }

export default createError(
  'Request failed with status code 500',
  config,
  'ECONNABORTED',
  {} as unknown as ClientRequest
)
