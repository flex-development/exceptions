import type { ExceptionDataDTO } from '@packages/exceptions/dtos'
import {
  ExceptionClassName,
  ExceptionCode,
  ExceptionId
} from '@packages/exceptions/enums'
import type {
  AxiosError,
  ExceptionJSON,
  FirebaseError,
  NextError
} from '@packages/exceptions/interfaces'
import ERROR_AXIOS_404 from '@packages/exceptions/tests/fixtures/error-axios-404.fixture'
import ERROR_AXIOS from '@packages/exceptions/tests/fixtures/error-axios-no-res.fixture'
import ERROR_FIREBASE_404 from '@packages/exceptions/tests/fixtures/error-firebase-404.fixture'
import ERROR_FIREBASE_INVALID_CODE from '@packages/exceptions/tests/fixtures/error-firebase-invalid-code.fixture'
import ERROR_NEXT_NO_STATUS from '@packages/exceptions/tests/fixtures/error-next-no-status.fixture'
import ERROR_NEXT from '@packages/exceptions/tests/fixtures/error-next.fixture'
import ERROR from '@packages/exceptions/tests/fixtures/error.fixture'
import EJSON from '@packages/exceptions/tests/fixtures/exception-json.fixture'
import type { Testcase } from '@tests/utils/types'
import pick from 'lodash.pick'
import TestSubject from '../base.exception'
import { DEM } from '../constants.exceptions'

/**
 * @file Unit Tests - Exception
 * @module exceptions/exceptions/tests/unit/Exception
 */

describe('exceptions/unit:exceptions/Exception', () => {
  describe('constructor', () => {
    describe('#data', () => {
      it('should omit dto.data.errors and dto.data.message', () => {
        // Arrange
        const data = { errors: [], message: 'error message override' }

        // Act
        const Subject = new TestSubject(ExceptionCode.NOT_FOUND, null, data)

        // Expect
        expect(Subject.data).to.deep.equal({})
      })

      it('should use dto.data properties if dto.data is ExceptionJSON', () => {
        // Arrange
        const message = ERROR.message

        // Act
        const Subject = new TestSubject(undefined, message, EJSON)

        // Expect
        expect(Subject.id).to.equal(EJSON.name)
        expect(Subject.toJSON()).to.deep.equal(EJSON)
      })
    })

    describe('#errors', () => {
      type Case = Testcase<Array<any>> & {
        data: ExceptionDataDTO
        array: 'is' | 'is not'
      }

      const cases: Case[] = [
        {
          array: 'is',
          data: { errors: [ERROR] },
          expected: [ERROR]
        },
        {
          array: 'is not',
          data: { errors: ERROR },
          expected: [ERROR]
        }
      ]

      cases.forEach(({ array, data, expected }) => {
        it(`should be array if dto.data.errors ${array} array`, () => {
          // Act
          const Subject = new TestSubject(undefined, undefined, data)

          // Expect
          expect(Subject.errors).to.have.deep.ordered.members(expected)
        })
      })
    })

    describe('#message', () => {
      type Case = Testcase<string> & {
        be: 'be' | 'not be'
        data: ExceptionDataDTO
        defined: 'defined' | 'not defined'
        message: string | undefined
      }

      const cases: Case[] = [
        {
          be: 'not be',
          data: {},
          defined: 'not defined',
          expected: DEM,
          message: DEM
        },
        {
          be: 'be',
          data: { message: ERROR.message },
          defined: 'defined',
          expected: ERROR.message,
          message: undefined
        }
      ]

      cases.forEach(({ be, data, defined, expected, message }) => {
        it(`should ${be} overridden if dto.data.message is ${defined}`, () => {
          // Act
          const Subject = new TestSubject(undefined, message, data)

          // Expect
          expect(Subject.message).to.equal(expected)
        })
      })
    })

    describe('#name', () => {
      it('should set #name to "Exception"', () => {
        expect(new TestSubject().name).to.equal('Exception')
      })
    })
  })

  describe('.findIdByCode', () => {
    type Case = Testcase<ExceptionId> & { code: any }

    const cases: Case[] = [
      { code: -1, expected: ExceptionId.INTERNAL_SERVER_ERROR },
      ...Object.keys(ExceptionId).map(id => ({
        code: ExceptionCode[id],
        expected: id as unknown as ExceptionId
      }))
    ]

    cases.forEach(({ code, expected }) => {
      it(`should return '${expected}' given [${code}]`, () => {
        expect(TestSubject.findIdByCode(code)).to.equal(expected)
      })
    })
  })

  describe('.formatCode', () => {
    type Case = Testcase<ExceptionCode> & { code: any }

    const cases: Case[] = [
      { code: -1, expected: ExceptionCode.INTERNAL_SERVER_ERROR },
      ...Object.keys(ExceptionId).map(id => ({
        code: ExceptionCode[id],
        expected: ExceptionCode[id] as ExceptionCode
      }))
    ]

    cases.forEach(({ code, expected }) => {
      it(`should return ${expected} given [${code}]`, () => {
        expect(TestSubject.formatCode(code)).to.equal(expected)
      })
    })
  })

  describe('.fromAxiosError', () => {
    type Case = Testcase<ExceptionJSON> & {
      error: AxiosError
      with: 'with' | 'without'
    }

    const cases: Case[] = [
      {
        error: ERROR_AXIOS_404,
        expected: {
          className: ExceptionClassName.NOT_FOUND,
          code: ERROR_AXIOS_404.response?.status as ExceptionCode,
          data: {
            code: ERROR_AXIOS_404.code,
            config: {
              ...pick(ERROR_AXIOS_404.config, [
                'auth',
                'baseURL',
                'data',
                'headers',
                'method',
                'params',
                'proxy',
                'responseType',
                'timeout',
                'transitional',
                'url',
                'withCredentials'
              ])
            },
            headers: {},
            isAxiosError: true,
            isExceptionJSON: true,
            payload: ERROR_AXIOS_404.response?.data,
            request: ERROR_AXIOS_404.request
          },
          errors: [],
          message: ERROR_AXIOS_404.response?.data.message,
          name: ExceptionId.NOT_FOUND
        },
        with: 'with'
      },
      {
        error: ERROR_AXIOS,
        expected: {
          className: ExceptionClassName.INTERNAL_SERVER_ERROR,
          code: ExceptionCode.INTERNAL_SERVER_ERROR,
          data: {
            code: ERROR_AXIOS.code,
            config: {
              ...pick(ERROR_AXIOS.config, [
                'auth',
                'baseURL',
                'data',
                'headers',
                'method',
                'params',
                'proxy',
                'responseType',
                'timeout',
                'transitional',
                'url',
                'withCredentials'
              ])
            },
            isAxiosError: true,
            isExceptionJSON: true,
            request: ERROR_AXIOS.request
          },
          errors: [],
          message: ERROR_AXIOS.message,
          name: ExceptionId.INTERNAL_SERVER_ERROR
        },
        with: 'without'
      }
    ]

    cases.forEach(({ error, expected, with: $with }) => {
      it(`should convert error ${$with} response into Exception`, () => {
        // Act
        const result = TestSubject.fromAxiosError(error).toJSON()

        // Expect
        expect(result).to.deep.equal(expected)
      })
    })
  })

  describe('.fromFirebaseError', () => {
    type Case = Testcase<ExceptionJSON> & {
      code: 'invalid' | 'valid'
      error: FirebaseError
    }

    const cases: Case[] = [
      {
        code: 'invalid',
        error: ERROR_FIREBASE_INVALID_CODE,
        expected: {
          className: ExceptionClassName.INTERNAL_SERVER_ERROR,
          code: ExceptionCode.INTERNAL_SERVER_ERROR,
          data: {
            code: ERROR_FIREBASE_INVALID_CODE.code,
            isExceptionJSON: true,
            isFirebaseError: true
          },
          errors: [],
          message: ERROR_FIREBASE_INVALID_CODE.message,
          name: ExceptionId.INTERNAL_SERVER_ERROR
        }
      },
      {
        code: 'valid',
        error: ERROR_FIREBASE_404,
        expected: {
          className: ExceptionClassName.NOT_FOUND,
          code: ExceptionCode.NOT_FOUND,
          data: {
            code: ERROR_FIREBASE_404.code,
            isExceptionJSON: true,
            isFirebaseError: true
          },
          errors: [],
          message: ERROR_FIREBASE_404.message,
          name: ExceptionId.NOT_FOUND
        }
      }
    ]

    cases.forEach(({ code, error, expected }) => {
      it(`should convert error with ${code} code into Exception`, () => {
        // Act
        const result = TestSubject.fromFirebaseError(error).toJSON()

        // Expect
        expect(result).to.deep.equal(expected)
      })
    })
  })

  describe('.fromNextError', () => {
    type Case = Testcase<ExceptionJSON> & {
      error: NextError
      with: 'with' | 'without'
    }

    const cases: Case[] = [
      {
        error: ERROR_NEXT,
        expected: {
          className: ExceptionClassName.BAD_GATEWAY,
          code: ERROR_NEXT.statusCode as ExceptionCode,
          data: {
            isExceptionJSON: true,
            isNextError: true
          },
          errors: [],
          message: ERROR_NEXT.message,
          name: ExceptionId.BAD_GATEWAY
        },
        with: 'with'
      },
      {
        error: ERROR_NEXT_NO_STATUS,
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
        with: 'without'
      }
    ]

    cases.forEach(({ error, expected, with: $with }) => {
      it(`should convert error ${$with} statusCode into Exception`, () => {
        // Act
        const result = TestSubject.fromNextError(error).toJSON()

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
