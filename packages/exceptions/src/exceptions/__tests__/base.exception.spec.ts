import type { ExceptionDataDTO } from '@packages/exceptions/dtos'
import {
  ExceptionClassName as ClassName,
  ExceptionCode as Code
} from '@packages/exceptions/enums'
import ERROR_AXIOS from '@packages/exceptions/tests/fixtures/error-axios-no-res.fixture'
import ERROR_FIREBASE_404 from '@packages/exceptions/tests/fixtures/error-firebase-404.fixture'
import ERROR_FIREBASE_INVALID_CODE from '@packages/exceptions/tests/fixtures/error-firebase-invalid-code.fixture'
import ERROR_NEXT_NO_STATUS from '@packages/exceptions/tests/fixtures/error-next-no-status.fixture'
import ERROR_NEXT from '@packages/exceptions/tests/fixtures/error-next.fixture'
import ERROR from '@packages/exceptions/tests/fixtures/error.fixture'
import ERROR_AXIOS_404 from '@packages/exceptions/tests/__fixtures__/errror-axios-404.fixture'
import type { Testcase } from '@tests/utils/types'
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
        const Subject = new TestSubject(Code.NOT_FOUND, undefined, data)

        // Expect
        expect(Subject.data).toContainAllEntries([])
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
        should: 'should' | 'should not'
      }

      const cases: Case[] = [
        { data: {}, expected: DEM, message: DEM, should: 'should not' },
        {
          data: { message: ERROR.message },
          expected: ERROR.message,
          message: undefined,
          should: 'should'
        }
      ]

      it.each<Case>(cases)('$should override message argument', testcase => {
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
    it('should return exception id', () => {
      expect(TestSubject.findIdByCode(Code.GONE)).toBe('GONE')
    })

    it('should return empty string', () => {
      expect(TestSubject.findIdByCode(-1)).toBe('')
    })
  })

  describe('.formatCode', () => {
    const code = Code.UNAUTHORIZED

    it('should return 500 if exception code is invalid', () => {
      expect(TestSubject.formatCode(-1 * code)).toBe(500)
    })

    it('should return exception code if valid', () => {
      expect(TestSubject.formatCode(code)).toBe(code)
    })
  })

  describe('.fromAxiosError', () => {
    it('should convert AxiosError with response into Exception', () => {
      // Act
      const result = TestSubject.fromAxiosError(ERROR_AXIOS_404)

      // Expect
      expect(result.code).toBe(ERROR_AXIOS_404.response?.status)
      expect(result.className).toBe(ClassName.NOT_FOUND)
      expect(result.data).toMatchObject({
        code: ERROR_AXIOS_404.toJSON().code,
        headers: ERROR_AXIOS_404.response?.headers,
        isAxiosError: true
      })
      expect(result.id).toBe('NOT_FOUND')
      expect(result.message).toBe(ERROR_AXIOS_404.response?.data?.message)
    })

    it('should convert AxiosError without response into Exception', () => {
      // Act
      const result = TestSubject.fromAxiosError(ERROR_AXIOS)

      // Expect
      expect(result.code).toBe(Code.INTERNAL_SERVER_ERROR)
      expect(result.className).toBe(ClassName.INTERNAL_SERVER_ERROR)
      expect(result.data).toMatchObject({
        $message: ERROR_AXIOS.message,
        code: ERROR_AXIOS.toJSON().code,
        isAxiosError: true
      })
      expect(result.id).toBe('INTERNAL_SERVER_ERROR')
      expect(result.message).toBe('No response received.')
    })
  })

  describe('.fromFirebaseError', () => {
    it('should convert FirebaseError with invalid code into Exception', () => {
      // Act
      const result = TestSubject.fromFirebaseError(ERROR_FIREBASE_INVALID_CODE)

      // Expect
      expect(result.code).toBe(Code.INTERNAL_SERVER_ERROR)
      expect(result.className).toBe(ClassName.INTERNAL_SERVER_ERROR)
      expect(result.data).toMatchObject({
        code: ERROR_FIREBASE_INVALID_CODE.code,
        isFirebaseError: true
      })
      expect(result.id).toBe('INTERNAL_SERVER_ERROR')
      expect(result.message).toBe(ERROR_FIREBASE_INVALID_CODE.message)
    })

    it('should convert FirebaseError with valid code into Exception', () => {
      // Act
      const result = TestSubject.fromFirebaseError(ERROR_FIREBASE_404)

      // Expect
      expect(result.code).toBe(Code.NOT_FOUND)
      expect(result.className).toBe(ClassName.NOT_FOUND)
      expect(result.data).toMatchObject({
        code: ERROR_FIREBASE_404.code,
        isFirebaseError: true
      })
      expect(result.id).toBe('NOT_FOUND')
      expect(result.message).toBe(ERROR_FIREBASE_404.message)
    })
  })

  describe('.fromNextError', () => {
    it('should convert NextError with statusCode into Exception', () => {
      // Act
      const result = TestSubject.fromNextError(ERROR_NEXT)

      // Expect
      expect(result.code).toBe(ERROR_NEXT.statusCode)
      expect(result.className).toBe(ClassName.BAD_GATEWAY)
      expect(result.data).toMatchObject({ isNextError: true })
      expect(result.id).toBe('BAD_GATEWAY')
      expect(result.message).toBe(ERROR_NEXT.message)
    })

    it('should convert NextError without statusCode into Exception', () => {
      // Act
      const result = TestSubject.fromNextError(ERROR_NEXT_NO_STATUS)

      // Expect
      expect(result.code).toBe(Code.INTERNAL_SERVER_ERROR)
      expect(result.className).toBe(ClassName.INTERNAL_SERVER_ERROR)
      expect(result.data).toMatchObject({ isNextError: true })
      expect(result.id).toBe('INTERNAL_SERVER_ERROR')
      expect(result.message).toBe(ERROR_NEXT_NO_STATUS.message)
    })
  })

  describe('#toJSON', () => {
    it('should return json representation of Exception', () => {
      // Arrange
      const code = Code.I_AM_A_TEAPOT
      const data = { errors: { test: true }, foo: '' }
      const message = 'Test error message'

      // Act + Expect
      expect(new TestSubject(code, message, data).toJSON()).toMatchObject({
        className: ClassName.I_AM_A_TEAPOT,
        code,
        data: { foo: data.foo },
        errors: [data.errors],
        message,
        name: 'I_AM_A_TEAPOT'
      })
    })
  })
})
