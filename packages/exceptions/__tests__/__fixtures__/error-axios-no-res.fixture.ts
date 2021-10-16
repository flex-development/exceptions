import type { AxiosError } from '@packages/exceptions/interfaces'
import type { AxiosRequestConfig } from 'axios'
import createAxiosError from 'axios/lib/core/createError'
import type { ClientRequest } from 'http'

/**
 * @file Workspace Test Fixture - AxiosError (No Response)
 * @module exceptions/tests/fixtures/ERROR_AXIOS_NO_RES
 */

const config: AxiosRequestConfig = { url: 'http://localhost:8080' }

export default createAxiosError(
  'Request failed with status code 500',
  config,
  'ECONNABORTED',
  {} as unknown as ClientRequest
) as AxiosError
