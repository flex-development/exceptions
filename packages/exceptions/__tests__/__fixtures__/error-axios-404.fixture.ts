import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import type { AxiosError } from '@packages/exceptions/interfaces'
import createAxiosError from 'axios/lib/core/createError'
import type { ClientRequest } from 'http'

/**
 * @file Workspace Test Fixture - AxiosError (404)
 * @module exceptions/tests/fixtures/ERROR_AXIOS_404
 */

const RESPONSE = {
  config: { url: 'http://kapi.flexdevelopment.vercel.app/404' },
  data: { message: 'Test error message' },
  headers: {},
  status: ExceptionCode.NOT_FOUND,
  statusText: 'NOT FOUND'
}

export default createAxiosError(
  'Request failed with status code 404',
  RESPONSE.config,
  undefined,
  {} as unknown as ClientRequest,
  RESPONSE
) as AxiosError
