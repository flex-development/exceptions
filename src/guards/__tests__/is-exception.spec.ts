/**
 * @file Unit Tests - isException
 * @module exceptions/guards/tests/unit/isException
 */

import ERROR from '#fixtures/error'
import Exception from '#src/exceptions/base.exception'
import testSubject from '../is-exception'

describe('unit:guards/isException', () => {
  it('should return false if value is not Exception instance', () => {
    expect(testSubject(ERROR)).to.be.false
  })

  it('should return true if value is Exception instance', () => {
    expect(testSubject(new Exception())).to.be.true
  })
})
