import { ExceptionStatusCode } from '@/enums/exception-status-code.enum'
import type { NextError } from '@/interfaces/next-error.interface'

/**
 * @file Test Fixture - NextError (With Status Code)
 * @module exceptions/tests/fixtures/next-error.fixture
 */

export default Object.assign(new Error('Test Next.js error with statusCode'), {
  statusCode: ExceptionStatusCode.BAD_GATEWAY
}) as NextError
