/**
 * @file Unit Tests - isExceptionJSON
 * @module exceptions/guards/tests/unit/isExceptionJSON
 */

import ERROR_AXIOS_404 from '#fixtures/error-axios-404'
import EJSON from '#fixtures/exception-json'
import testSubject from '../is-exception-json'

describe('unit:guards/isExceptionJSON', () => {
  it('should return false if value is not ExceptionJSON', () => {
    expect(testSubject(ERROR_AXIOS_404.response)).to.be.false
  })

  it('should return true if value is ExceptionJSON', () => {
    expect(testSubject(EJSON)).to.be.true
  })
})
