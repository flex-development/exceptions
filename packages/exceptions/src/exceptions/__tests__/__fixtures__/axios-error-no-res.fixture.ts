import type { AxiosError } from '@packages/exceptions/interfaces/axios-error.interface'
import createAxiosError from 'axios/lib/core/createError'

/**
 * @file Test Fixture - AxiosError (Without `response`)
 * @module exceptions/tests/fixtures/axios-error-no-res.fixture
 */

export default createAxiosError(
  'Request failed with status code 500',
  {},
  'ECONNABORTED',
  true
) as AxiosError
