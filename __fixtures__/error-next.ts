/**
 * @file Test Fixture - NextError (With Status Code)
 * @module fixtures/ERROR_NEXT
 */

import ExceptionCode from 'src/enums/exception-code.enum'
import type { NextError } from 'src/interfaces'

export default Object.assign(new Error('Test Next.js error with statusCode'), {
  statusCode: ExceptionCode.BAD_GATEWAY
}) as NextError
