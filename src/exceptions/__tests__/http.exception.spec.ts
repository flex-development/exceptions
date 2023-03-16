/**
 * @file Unit Tests - HttpException
 * @module exceptions/exceptions/tests/unit/HttpException
 */

import { ClassName, Status, StatusName } from '#src/enums'
import Exception from '../base.exception'
import TestSubject from '../http.exception'

describe('unit:exceptions/HttpException', () => {
  describe('constructor', () => {
    let subject: TestSubject

    beforeAll(() => {
      subject = new TestSubject()
    })

    it('should set #classname', () => {
      expect(subject.classname).to.equal(ClassName.INTERNAL_SERVER_ERROR)
    })

    it('should set #id', () => {
      expect(subject.id).to.equal(StatusName.INTERNAL_SERVER_ERROR)
    })

    it('should set #name', () => {
      expect(subject.name).to.equal('HttpException')
    })

    it('should set #status', () => {
      expect(subject.status).to.equal(Status.INTERNAL_SERVER_ERROR)
    })
  })

  describe('.is', () => {
    it('should return false if value is not HttpException instance', () => {
      expect(TestSubject.is(new Exception())).to.be.false
    })

    it('should return true if value is HttpException instance', () => {
      expect(TestSubject.is(new TestSubject())).to.be.true
    })
  })

  describe('.isJSON', () => {
    it('should return false if value is not HttpExceptionJSON object', () => {
      expect(TestSubject.isJSON({})).to.be.false
    })

    it('should return true if value is HttpExceptionJSON object', () => {
      expect(TestSubject.isJSON(new TestSubject().toJSON())).to.be.true
    })
  })

  describe('#toJSON', () => {
    it('should return json representation of HttpException', () => {
      expect(new TestSubject().toJSON()).to.be.frozen.and.deep.equal({
        cause: { code: null },
        classname: ClassName.INTERNAL_SERVER_ERROR,
        data: {},
        errors: [],
        message: 'Unknown error',
        name: StatusName.INTERNAL_SERVER_ERROR,
        status: Status.INTERNAL_SERVER_ERROR
      })
    })
  })
})
