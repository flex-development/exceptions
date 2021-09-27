import { ExceptionStatusCode } from '@packages/exceptions/enums/exception-status-code.enum'
import type { AxiosError } from '@packages/exceptions/interfaces/axios-error.interface'
import createAxiosError from 'axios/lib/core/createError'

/**
 * @file Workspace Test Fixture - AxiosError (404)
 * @module exceptions/tests/fixtures/error-axios-404
 */

const RESPONSE = {
  config: {},
  data: { message: 'Test error message' },
  headers: {},
  status: ExceptionStatusCode.NOT_FOUND,
  statusText: 'NOT FOUND'
}

export default createAxiosError(
  'Request failed with status code 404',
  RESPONSE.config,
  undefined,
  true,
  RESPONSE
) as AxiosError
