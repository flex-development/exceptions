/**
 * @file Unit Tests - isExceptionId
 * @module exceptions/guards/tests/unit/isExceptionId
 */

import ExceptionCode from '#src/enums/exception-code'
import ExceptionId from '#src/enums/exception-id'
import testSubject from '../is-exception-id'

describe('unit:guards/isExceptionId', () => {
  it('should return false given non-ExceptionId value', () => {
    expect(testSubject(ExceptionCode.UNAUTHORIZED)).to.be.false
  })

  it('should return true given ExceptionId value', () => {
    expect(testSubject(ExceptionId.GATEWAY_TIMEOUT)).to.be.true
  })
})
