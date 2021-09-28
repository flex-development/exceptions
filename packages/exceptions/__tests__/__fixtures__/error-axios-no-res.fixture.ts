import type { AxiosError } from '@packages/exceptions/interfaces/axios-error.interface'
import type { AxiosRequestConfig } from '@packages/exceptions/types/axios/axios-request-config.type'
import createAxiosError from 'axios/lib/core/createError'
import type { ClientRequest } from 'http'

/**
 * @file Workspace Test Fixture - AxiosError (No Response)
 * @module exceptions/tests/fixtures/error-axios-no-res
 */

const config: AxiosRequestConfig = { url: 'http://localhost:8080' }

export default createAxiosError(
  'Request failed with status code 500',
  config,
  'ECONNABORTED',
  {} as unknown as ClientRequest
) as AxiosError
