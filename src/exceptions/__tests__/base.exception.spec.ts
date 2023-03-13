/**
 * @file Unit Tests - Exception
 * @module exceptions/exceptions/tests/unit/Exception
 */

import ERROR from '#fixtures/error'
import ERROR_AXIOS_404 from '#fixtures/error-axios-404'
import ERROR_AXIOS from '#fixtures/error-axios-no-res'
import ERROR_FIREBASE_404 from '#fixtures/error-firebase-404'
import ERROR_FIREBASE_INVALID_CODE from '#fixtures/error-firebase-invalid-code'
import ERROR_NEXT from '#fixtures/error-next'
import ERROR_NEXT_NO_STATUS from '#fixtures/error-next-no-status'
import EJSON from '#fixtures/exception-json'
import { DEM } from '#src/config/constants'
import type { ExceptionDataDTO } from '#src/dtos'
import { ExceptionClassName, ExceptionCode, ExceptionId } from '#src/enums'
import type { ExceptionJSON } from '#src/interfaces'
import TestSubject from '../base.exception'

describe('unit:exceptions/Exception', () => {
  describe('constructor', () => {
    describe('#data', () => {
      it('should omit dto.data.errors and dto.data.message', () => {
        // Arrange
        const data = { errors: [], message: 'error message override' }

        // Act
        const subject = new TestSubject(ExceptionCode.NOT_FOUND, null, data)

        // Expect
        expect(subject.data).to.deep.equal({})
      })

      it('should use dto.data properties if dto.data is ExceptionJSON', () => {
        // Arrange
        const message = ERROR.message

        // Act
        const subject = new TestSubject(undefined, message, EJSON)

        // Expect
        expect(subject.id).to.equal(EJSON.name)
        expect(subject.toJSON()).to.deep.equal(EJSON)
      })
    })

    describe('#errors', () => {
      it('should set errors property', () => {
        // Arrange
        const cases: [...ConstructorParameters<typeof TestSubject>, any[]][] = [
          [undefined, undefined, { errors: [ERROR] }, undefined, [ERROR]],
          [undefined, undefined, { errors: ERROR }, undefined, [ERROR]]
        ]

        // Act + Expect
        cases.forEach(([code, message, data, stack, expected]) => {
          const result = new TestSubject(code, message, data, stack).errors

          expect(result).to.have.deep.ordered.members(expected)
        })
      })
    })

    describe('#message', () => {
      it('should set message property', () => {
        // Arrange
        const cases: [...ConstructorParameters<typeof TestSubject>, string][] =
          [
            [undefined, DEM, {}, '', DEM],
            [undefined, '', { message: ERROR.message }, '', ERROR.message]
          ]

        // Act + Expect
        cases.forEach(([code, message, data, stack, expected]) => {
          const result = new TestSubject(code, message, data, stack).message

          expect(result).to.equal(expected)
        })
      })
    })

    describe('#name', () => {
      it('should equal "Exception"', () => {
        expect(new TestSubject().name).to.equal('Exception')
      })
    })
  })

  describe('.findIdByCode', () => {
    it('should return default ExceptionId given unknown code', () => {
      // Arrange
      const expected: ExceptionId = ExceptionId.INTERNAL_SERVER_ERROR

      // Act + Expect
      expect(TestSubject.findIdByCode(-1)).to.equal(expected)
    })

    it('should return ExceptionId given ExceptionCode', () => {
      // Arrange
      const code: number = ExceptionCode.I_AM_A_TEAPOT

      // Act + Expect
      expect(TestSubject.findIdByCode(code)).to.equal(ExceptionId.I_AM_A_TEAPOT)
    })
  })

  describe('.formatCode', () => {
    it('should return default ExceptionCode given non-ExceptionCode', () => {
      // Arrange
      const expected: ExceptionCode = ExceptionCode.INTERNAL_SERVER_ERROR

      // Act + Expect
      expect(TestSubject.formatCode(-1)).to.equal(expected)
    })

    it('should return ExceptionCode given ExceptionCode', () => {
      // Arrange
      const code: number = ExceptionCode.I_AM_A_TEAPOT

      // Act + Expect
      expect(TestSubject.formatCode(code)).to.equal(code)
    })
  })

  describe('.fromAxiosError', () => {
    it('should return error as Exception', () => {
      // Arrange
      const cases: [
        ...Parameters<(typeof TestSubject)['fromAxiosError']>,
        ExceptionJSON
      ][] = [
        [
          ERROR_AXIOS_404,
          {
            className: ExceptionClassName.NOT_FOUND,
            code: ERROR_AXIOS_404.response?.status as ExceptionCode,
            data: {
              code: ERROR_AXIOS_404.code,
              config: ERROR_AXIOS_404.config,
              headers: {},
              isAxiosError: true,
              isExceptionJSON: true,
              payload: ERROR_AXIOS_404.response?.data,
              request: ERROR_AXIOS_404.request
            },
            errors: [],
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            message: ERROR_AXIOS_404.response?.data.message,
            name: ExceptionId.NOT_FOUND
          }
        ],
        [
          ERROR_AXIOS,
          {
            className: ExceptionClassName.INTERNAL_SERVER_ERROR,
            code: ExceptionCode.INTERNAL_SERVER_ERROR,
            data: {
              code: ERROR_AXIOS.code,
              config: ERROR_AXIOS.config,
              isAxiosError: true,
              isExceptionJSON: true,
              request: ERROR_AXIOS.request
            },
            errors: [],
            message: ERROR_AXIOS.message,
            name: ExceptionId.INTERNAL_SERVER_ERROR
          }
        ]
      ]

      // Act + Expect
      cases.forEach(([error, expected]) => {
        const result = TestSubject.fromAxiosError(error).toJSON()

        expect(result).to.deep.equal(expected)
      })
    })
  })

  describe('.fromFirebaseError', () => {
    it('should return error as Exception', () => {
      // Arrange
      const cases: [
        ...Parameters<(typeof TestSubject)['fromFirebaseError']>,
        ExceptionJSON
      ][] = [
        [
          ERROR_FIREBASE_INVALID_CODE,
          {
            className: ExceptionClassName.INTERNAL_SERVER_ERROR,
            code: ExceptionCode.INTERNAL_SERVER_ERROR,
            data: {
              code: ERROR_FIREBASE_INVALID_CODE.code,
              customData: undefined,
              isExceptionJSON: true,
              isFirebaseError: true
            },
            errors: [],
            message: ERROR_FIREBASE_INVALID_CODE.message,
            name: ExceptionId.INTERNAL_SERVER_ERROR
          }
        ],
        [
          ERROR_FIREBASE_404,
          {
            className: ExceptionClassName.NOT_FOUND,
            code: ExceptionCode.NOT_FOUND,
            data: {
              code: ERROR_FIREBASE_404.code,
              customData: undefined,
              isExceptionJSON: true,
              isFirebaseError: true
            },
            errors: [],
            message: ERROR_FIREBASE_404.message,
            name: ExceptionId.NOT_FOUND
          }
        ]
      ]

      // Act + Expect
      cases.forEach(([error, expected]) => {
        const result = TestSubject.fromFirebaseError(error).toJSON()

        expect(result).to.deep.equal(expected)
      })
    })
  })

  describe('.fromNextError', () => {
    it('should return error as Exception', () => {
      // Arrange
      const cases: [
        ...Parameters<(typeof TestSubject)['fromNextError']>,
        ExceptionJSON
      ][] = [
        [
          ERROR_NEXT,
          {
            className: ExceptionClassName.BAD_GATEWAY,
            code: ERROR_NEXT.statusCode!,
            data: {
              isExceptionJSON: true,
              isNextError: true
            },
            errors: [],
            message: ERROR_NEXT.message,
            name: ExceptionId.BAD_GATEWAY
          }
        ],
        [
          ERROR_NEXT_NO_STATUS,
          {
            className: ExceptionClassName.INTERNAL_SERVER_ERROR,
            code: ExceptionCode.INTERNAL_SERVER_ERROR,
            data: {
              isExceptionJSON: true,
              isNextError: true
            },
            errors: [],
            message: ERROR_NEXT_NO_STATUS.message,
            name: ExceptionId.INTERNAL_SERVER_ERROR
          }
        ]
      ]

      // Act + Expect
      cases.forEach(([error, expected]) => {
        const result = TestSubject.fromNextError(error).toJSON()

        expect(result).to.deep.equal(expected)
      })
    })
  })

  describe('#toJSON', () => {
    it('should return json representation of Exception', () => {
      // Arrange
      const code: ExceptionCode = ExceptionCode.I_AM_A_TEAPOT
      const data: ExceptionDataDTO = { errors: { test: true }, foo: '' }
      const message: string = 'Test error message'

      // Act + Expect
      expect(new TestSubject(code, message, data).toJSON()).deep.equal({
        className: ExceptionClassName.I_AM_A_TEAPOT,
        code,
        data: { foo: data.foo, isExceptionJSON: true },
        errors: [data.errors],
        message,
        name: ExceptionId.I_AM_A_TEAPOT
      })
    })
  })
})
