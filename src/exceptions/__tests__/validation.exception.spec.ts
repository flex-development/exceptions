/**
 * @file Unit Tests - ValidationException
 * @module exceptions/exceptions/tests/unit/ValidationException
 */

import ERRORS from 'fixtures/validation-errors'
import type { ValidationExceptionDTO } from 'src/dtos'
import { ExceptionCode } from 'src/enums'
import TestSubject from '../validation.exception'

describe('exceptions/unit:exceptions/ValidationException', () => {
  describe('constructor', () => {
    it('should construct ValidationException with defaults', () => {
      // Act
      const result = new TestSubject('Model', { errors: ERRORS })

      // Expect
      expect(result.code).to.equal(ExceptionCode.UNPROCESSABLE_ENTITY)
      expect(result.toJSON().data).to.deep.equal({ isExceptionJSON: true })
      expect(result.message).to.equal('Model validation failure: [title,text]')
      expect(result.name).to.equal('ValidationException')
    })

    it('should construct ValidationException with overrides', () => {
      // Arrange
      const dto: ValidationExceptionDTO = {
        code: ExceptionCode.NOT_FOUND,
        id: 42,
        message: 'user id must be belong to existing user'
      }

      // Act
      const result = new TestSubject('Model', { ...dto, errors: ERRORS })

      // Expect
      expect(result.code).to.equal(dto.code)
      expect(result.toJSON().data).to.deep.equal({
        id: dto.id,
        isExceptionJSON: true
      })
      expect(result.message).to.equal(dto.message)
      expect(result.name).to.equal('ValidationException')
    })
  })
})
