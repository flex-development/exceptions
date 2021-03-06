import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import type { NextError } from '@packages/exceptions/interfaces'

/**
 * @file Workspace Test Fixture - NextError (With Status Code)
 * @module exceptions/tests/fixtures/ERROR_NEXT
 */

export default Object.assign(new Error('Test Next.js error with statusCode'), {
  statusCode: ExceptionCode.BAD_GATEWAY
}) as NextError
