/**
 * @file Test Fixture - AxiosError (404)
 * @module fixtures/ERROR_AXIOS_404
 */

import createError from 'axios/lib/core/createError'
import type { ClientRequest } from 'node:http'
import ExceptionCode from 'src/enums/exception-code'
import type { AxiosError as AxiosErrorType } from 'src/interfaces'

const RESPONSE = {
  config: { url: '^https:\\/\\/api.flexdevelopment.vercel.app/404' },
  data: { message: 'Axios error message' },
  headers: {},
  status: ExceptionCode.NOT_FOUND,
  statusText: 'NOT FOUND'
}

export default createError(
  'Request failed with status code 404',
  RESPONSE.config,
  undefined,
  {} as unknown as ClientRequest,
  RESPONSE
) as AxiosErrorType
