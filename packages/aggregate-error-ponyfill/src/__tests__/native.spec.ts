import TestSubject from '../native'

/**
 * @file Unit Tests - AggregateError Native
 * @module aggregate-error-ponyfill/tests/unit/native
 */

describe('aggregate-error-ponyfill/unit:native', () => {
  describe('constructor', () => {
    it('should have spec-compliant signature if available', () => {
      expect(typeof TestSubject).to.equal('function')
      expect(TestSubject.name).equal('AggregateError')
      expect(TestSubject.prototype.errors).equal(undefined)
      expect(TestSubject.prototype.message).equal('')
      expect(TestSubject.length).equal(2)
    })
  })
})
