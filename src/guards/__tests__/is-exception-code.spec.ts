/**
 * @file Unit Tests - isExceptionCode
 * @module exceptions/guards/tests/unit/isExceptionCode
 */

import ExceptionCode from '#src/enums/exception-code'
import ExceptionId from '#src/enums/exception-id'
import testSubject from '../is-exception-code'

describe('unit:guards/isExceptionCode', () => {
  it('should return false given non-ExceptionCode value', () => {
    expect(testSubject(ExceptionId.I_AM_A_TEAPOT)).to.be.false
  })

  it('should return true given ExceptionCode value', () => {
    expect(testSubject(ExceptionCode.PAYLOAD_TOO_LARGE)).to.be.true
  })
})
