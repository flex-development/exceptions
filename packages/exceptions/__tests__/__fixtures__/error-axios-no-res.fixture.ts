import type { AxiosError } from '@packages/exceptions/interfaces/axios-error.interface'
import createAxiosError from 'axios/lib/core/createError'

/**
 * @file Workspace Test Fixture - AxiosError (No Response)
 * @module exceptions/tests/fixtures/error-axios-no-res
 */

export default createAxiosError(
  'Request failed with status code 500',
  {},
  'ECONNABORTED',
  true
) as AxiosError
