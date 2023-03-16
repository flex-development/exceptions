/**
 * @file Unit Tests - Exception
 * @module exceptions/exceptions/tests/unit/Exception
 */

import TestSubject from '../base.exception'

describe('unit:exceptions/Exception', () => {
  describe('constructor', () => {
    let subject: TestSubject

    beforeAll(() => {
      subject = new TestSubject()
    })

    it('should set #code', () => {
      expect(subject.code).to.be.null
    })

    it('should set #data', () => {
      expect(subject.data).to.deep.equal({})
    })

    it('should set #name', () => {
      expect(subject.name).to.equal('Exception')
    })

    it('should set #stack', () => {
      expect(subject.stack).to.be.a('string')
    })
  })

  describe('.is', () => {
    it('should return false if value is not Exception instance', () => {
      expect(TestSubject.is(new Error())).to.be.false
    })

    it('should return true if value is Exception instance', () => {
      expect(TestSubject.is(new TestSubject(null, { stack: ' ' }))).to.be.true
    })
  })

  describe('.isJSON', () => {
    it('should return false if value is not ExceptionJSON object', () => {
      expect(TestSubject.isJSON({})).to.be.false
    })

    it('should return true if value is ExceptionJSON object', () => {
      expect(TestSubject.isJSON(new TestSubject().toJSON())).to.be.true
    })
  })

  describe('#toJSON', () => {
    it('should return json representation of Exception', () => {
      expect(new TestSubject(null).toJSON()).to.be.frozen.and.deep.equal({
        cause: { code: null },
        data: {},
        errors: [],
        message: 'Unknown error'
      })
    })
  })
})
