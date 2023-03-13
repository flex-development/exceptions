/**
 * @file Unit Tests - isExceptionClassName
 * @module exceptions/guards/tests/unit/isExceptionClassName
 */

import ExceptionClassName from '#src/enums/exception-class-name'
import ExceptionId from '#src/enums/exception-id'
import testSubject from '../is-exception-class-name'

describe('unit:guards/isExceptionClassName', () => {
  it('should return false given non-ExceptionClassName value', () => {
    expect(testSubject(ExceptionId.TOO_MANY_REQUESTS)).to.be.false
  })

  it('should return true given ExceptionClassName value', () => {
    expect(testSubject(ExceptionClassName.URI_TOO_LONG)).to.be.true
  })
})
