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
import ERROR_AXIOS from '@packages/exceptions/tests/fixtures/error-axios-no-res.fixture'
import ERROR_FIREBASE_404 from '@packages/exceptions/tests/fixtures/error-firebase-404.fixture'
import ERROR_FIREBASE_INVALID_CODE from '@packages/exceptions/tests/fixtures/error-firebase-invalid-code.fixture'
import ERROR_NEXT_NO_STATUS from '@packages/exceptions/tests/fixtures/error-next-no-status.fixture'
import ERROR_NEXT from '@packages/exceptions/tests/fixtures/error-next.fixture'
import ERROR from '@packages/exceptions/tests/fixtures/error.fixture'
import EJSON from '@packages/exceptions/tests/fixtures/exception-json.fixture'
import ERROR_AXIOS_404 from '@packages/exceptions/tests/__fixtures__/errror-axios-404.fixture'
import type { Testcase } from '@tests/utils/types'
import pick from 'lodash.pick'
import TestSubject from '../base.exception'
import { DEM } from '../constants.exceptions'

/**
 * @file Unit Tests - Exception
 * @module exceptions/exceptions/tests/unit/Exception
 */

describe('unit:exceptions/Exception', () => {
  describe('constructor', () => {
    describe('#data', () => {
      it('should omit dto.data.errors and dto.data.message', () => {
        // Arrange
        const data = { errors: [], message: 'error message override' }

        // Act
        const Subject = new TestSubject(ExceptionCode.NOT_FOUND, null, data)

        // Expect
        expect(Subject.data).toContainAllEntries([])
      })

      it('should use dto.data properties if dto.data is ExceptionJSON', () => {
        // Arrange
        const message = ERROR.message

        // Act
        const Subject = new TestSubject(undefined, message, EJSON)

        // Expect
        expect(Subject.id).toBe(EJSON.name)
        expect(Subject.toJSON()).toStrictEqual(EJSON)
      })
    })

    describe('#errors', () => {
      type Case = Testcase<Array<any>> & {
        data: ExceptionDataDTO
        is: 'is' | 'is not'
      }

      const cases: Case[] = [
        {
          data: { errors: [ERROR] },
          expected: [ERROR],
          is: 'is'
        },
        {
          data: { errors: ERROR },
          expected: [ERROR],
          is: 'is not'
        }
      ]

      const name = 'should be array if dto.data.errors $is'

      it.each<Case>(cases)(name, testcase => {
        // Arrange
        const { data, expected } = testcase

        // Act
        const Subject = new TestSubject(undefined, undefined, data)

        // Expect
        expect(Subject.errors).toIncludeSameMembers(expected)
      })
    })

    describe('#message', () => {
      type Case = Testcase<string> & {
        data: ExceptionDataDTO
        message: string | undefined
        be: 'be' | 'not be'
        defined: 'defined' | 'not defined'
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

      const name = 'should $be overridden if dto.data.message is $defined'

      it.each<Case>(cases)(name, testcase => {
        // Arrange
        const { data, expected, message } = testcase

        // Act
        const Subject = new TestSubject(undefined, message, data)

        // Expect
        expect(Subject.message).toBe(expected)
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

    it.each<Case>(cases)("should return '$expected' given $code", testcase => {
      // Arrange
      const { code, expected } = testcase

      // Act + Expect
      expect(TestSubject.findIdByCode(code)).toBe(expected)
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

    it.each<Case>(cases)('should return $expected given $code', testcase => {
      // Arrange
      const { code, expected } = testcase

      // Act + Expect
      expect(TestSubject.formatCode(code)).toBe(expected)
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

    const name = 'should convert error $with response into Exception'

    it.each<Case>(cases)(name, testcase => {
      // Arrange
      const { error, expected } = testcase

      // Act
      const result = TestSubject.fromAxiosError(error).toJSON()

      // Expect
      expect(result).toStrictEqual(expected)
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

    const name = 'should convert error with $code code into Exception'

    it.each<Case>(cases)(name, testcase => {
      // Arrange
      const { error, expected } = testcase

      // Act
      const result = TestSubject.fromFirebaseError(error).toJSON()

      // Expect
      expect(result).toStrictEqual(expected)
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

    const name = 'should convert error $with statusCode into Exception'

    it.each<Case>(cases)(name, testcase => {
      // Arrange
      const { error, expected } = testcase

      // Act
      const result = TestSubject.fromNextError(error).toJSON()

      // Expect
      expect(result).toStrictEqual(expected)
    })
  })

  describe('#toJSON', () => {
    it('should return json representation of Exception', () => {
      // Arrange
      const code = ExceptionCode.I_AM_A_TEAPOT
      const data = { errors: { test: true }, foo: '' }
      const message = 'Test error message'

      // Act + Expect
      expect(new TestSubject(code, message, data).toJSON()).toStrictEqual({
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
