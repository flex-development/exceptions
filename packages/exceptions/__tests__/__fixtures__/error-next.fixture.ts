import { ExceptionStatusCode } from '@packages/exceptions/enums/exception-status-code.enum'
import type { NextError } from '@packages/exceptions/interfaces/next-error.interface'

/**
 * @file Workspace Test Fixture - NextError (With Status Code)
 * @module exceptions/tests/fixtures/error-next
 */

export default Object.assign(new Error('Test Next.js error with statusCode'), {
  statusCode: ExceptionStatusCode.BAD_GATEWAY
}) as NextError