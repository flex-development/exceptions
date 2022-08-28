/**
 * @file Unit Tests - Exception
 * @module exceptions/exceptions/tests/unit/Exception
 */

import ERROR from 'fixtures/error'
import ERROR_AXIOS_404 from 'fixtures/error-axios-404'
import ERROR_AXIOS from 'fixtures/error-axios-no-res'
import ERROR_FIREBASE_404 from 'fixtures/error-firebase-404'
import ERROR_FIREBASE_INVALID_CODE from 'fixtures/error-firebase-invalid-code'
import ERROR_NEXT from 'fixtures/error-next'
import ERROR_NEXT_NO_STATUS from 'fixtures/error-next-no-status'
import EJSON from 'fixtures/exception-json'
import { ExceptionClassName, ExceptionCode, ExceptionId } from 'src/enums'
import type { ExceptionJSON } from 'src/interfaces'
import type { Testcase, TestcaseFn } from 'tests/interfaces'
import TestSubject from '../base.exception'
import { DEM } from '../constants.exceptions'

describe('exceptions/unit:exceptions/Exception', () => {
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
      interface Case extends Testcase<any[]> {
        parameters: ConstructorParameters<typeof TestSubject>
      }

      const cases: Case[] = [
        {
          expected: [ERROR],
          parameters: [undefined, undefined, { errors: [ERROR] }]
        },
        {
          expected: [ERROR],
          parameters: [undefined, undefined, { errors: ERROR }]
        }
      ]

      cases.forEach(({ expected, parameters }) => {
        it(`should equal ${pf(expected)} given ${pf(parameters)}`, () => {
          // Act
          const subject = new TestSubject(...parameters)

          // Expect
          expect(subject.errors).to.have.deep.ordered.members(expected)
        })
      })
    })

    describe('#message', () => {
      interface Case extends Testcase<string> {
        parameters: ConstructorParameters<typeof TestSubject>
      }

      const cases: Case[] = [
        { expected: DEM, parameters: [undefined, DEM, {}] },
        {
          expected: ERROR.message,
          parameters: [undefined, '', { message: ERROR.message }]
        }
      ]

      cases.forEach(({ expected, parameters }) => {
        it(`should equal ${pf(expected)} given ${pf(parameters)}`, () => {
          expect(new TestSubject(...parameters).message).to.equal(expected)
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
    interface Case extends TestcaseFn<typeof TestSubject['findIdByCode']> {}

    const cases: Case[] = [
      { expected: ExceptionId.INTERNAL_SERVER_ERROR, parameters: [-1] }
    ]

    Object.keys(ExceptionId).forEach(k => {
      cases.push({ expected: k as ExceptionId, parameters: [ExceptionCode[k]] })
    })

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.findIdByCode(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.formatCode', () => {
    interface Case extends TestcaseFn<typeof TestSubject['formatCode']> {}

    const cases: Case[] = [
      { expected: ExceptionCode.INTERNAL_SERVER_ERROR, parameters: [-1] }
    ]

    Object.keys(ExceptionId).forEach(k => {
      cases.push({ expected: ExceptionCode[k], parameters: [ExceptionCode[k]] })
    })

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.formatCode(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.fromAxiosError', () => {
    interface Case extends Testcase<ExceptionJSON> {
      parameters: Parameters<typeof TestSubject['fromAxiosError']>
    }

    const cases: Case[] = [
      {
        expected: {
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
        },
        parameters: [ERROR_AXIOS_404]
      },
      {
        expected: {
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
        },
        parameters: [ERROR_AXIOS]
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return Exception given ${pf(parameters)}`, () => {
        // Act
        const result = TestSubject.fromAxiosError(...parameters).toJSON()

        // Expect
        expect(result).to.deep.equal(expected)
      })
    })
  })

  describe('.fromFirebaseError', () => {
    interface Case extends Testcase<ExceptionJSON> {
      parameters: Parameters<typeof TestSubject['fromFirebaseError']>
    }

    const cases: Case[] = [
      {
        expected: {
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
        },
        parameters: [ERROR_FIREBASE_INVALID_CODE]
      },
      {
        expected: {
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
        },
        parameters: [ERROR_FIREBASE_404]
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return Exception given ${pf(parameters)}`, () => {
        // Act
        const result = TestSubject.fromFirebaseError(...parameters).toJSON()

        // Expect
        expect(result).to.deep.equal(expected)
      })
    })
  })

  describe('.fromNextError', () => {
    interface Case extends Testcase<ExceptionJSON> {
      parameters: Parameters<typeof TestSubject['fromNextError']>
    }

    const cases: Case[] = [
      {
        expected: {
          className: ExceptionClassName.BAD_GATEWAY,
          code: ERROR_NEXT.statusCode!,
          data: {
            isExceptionJSON: true,
            isNextError: true
          },
          errors: [],
          message: ERROR_NEXT.message,
          name: ExceptionId.BAD_GATEWAY
        },
        parameters: [ERROR_NEXT]
      },
      {
        expected: {
          className: ExceptionClassName.INTERNAL_SERVER_ERROR,
          code: ExceptionCode.INTERNAL_SERVER_ERROR,
          data: {
            isExceptionJSON: true,
            isNextError: true
          },
          errors: [],
          message: ERROR_NEXT_NO_STATUS.message,
          name: ExceptionId.INTERNAL_SERVER_ERROR
        },
        parameters: [ERROR_NEXT_NO_STATUS]
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return Exception given ${pf(parameters)}`, () => {
        // Act
        const result = TestSubject.fromNextError(...parameters).toJSON()

        // Expect
        expect(result).to.deep.equal(expected)
      })
    })
  })

  describe('#toJSON', () => {
    it('should return json representation of Exception', () => {
      // Arrange
      const code = ExceptionCode.I_AM_A_TEAPOT
      const data = { errors: { test: true }, foo: '' }
      const message = 'Test error message'

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
