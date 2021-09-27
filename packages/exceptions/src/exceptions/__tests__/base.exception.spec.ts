import type { ExceptionDataDTO } from '@packages/exceptions/dtos'
import {
  ExceptionClassName as ClassName,
  ExceptionStatusCode as Code
} from '@packages/exceptions/enums'
import ERROR from '@packages/exceptions/tests/fixtures/error.fixture'
import type { Testcase } from '@tests/utils/types'
import TestSubject from '../base.exception'
import { DEM } from '../constants.exceptions'
import AXIOS_ERROR_404 from './__fixtures__/axios-error-404.fixture'
import AXIOS_ERROR_NO_RES from './__fixtures__/axios-error-no-res.fixture'
import FIREBASE_ERROR_404 from './__fixtures__/firebase-error-404.fixture'
import FIREBASE_ERROR_IC from './__fixtures__/firebase-error-invalid.fixture'
import NEXT_ERROR_NO_CODE from './__fixtures__/next-error-no-code.fixture'
import NEXT_ERROR_BAD_GATEWAY from './__fixtures__/next-error.fixture'

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

  describe('.findNameByCode', () => {
    it('should return name of exception', () => {
      expect(TestSubject.findNameByCode(Code.GONE)).toBe('GONE')
    })

    it('should return empty string', () => {
      expect(TestSubject.findNameByCode(-1)).toBe('')
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
      const result = TestSubject.fromAxiosError(AXIOS_ERROR_404)

      // Expect
      expect(result.code).toBe(AXIOS_ERROR_404.response?.status)
      expect(result.className).toBe(ClassName.NOT_FOUND)
      expect(result.data).toMatchObject({
        code: AXIOS_ERROR_404.toJSON().code,
        headers: AXIOS_ERROR_404.response?.headers,
        isAxiosError: true
      })
      expect(result.message).toBe(AXIOS_ERROR_404.response?.data?.message)
      expect(result.name).toBe('NOT_FOUND')
    })

    it('should convert AxiosError without response into Exception', () => {
      // Act
      const result = TestSubject.fromAxiosError(AXIOS_ERROR_NO_RES)

      // Expect
      expect(result.code).toBe(Code.INTERNAL_SERVER_ERROR)
      expect(result.className).toBe(ClassName.INTERNAL_SERVER_ERROR)
      expect(result.data).toMatchObject({
        $message: AXIOS_ERROR_NO_RES.message,
        code: AXIOS_ERROR_NO_RES.toJSON().code,
        isAxiosError: true
      })
      expect(result.message).toBe('No response received.')
      expect(result.name).toBe('INTERNAL_SERVER_ERROR')
    })
  })

  describe('.fromFirebaseError', () => {
    it('should convert FirebaseError with invalid code into Exception', () => {
      // Act
      const result = TestSubject.fromFirebaseError(FIREBASE_ERROR_IC)

      // Expect
      expect(result.code).toBe(Code.INTERNAL_SERVER_ERROR)
      expect(result.className).toBe(ClassName.INTERNAL_SERVER_ERROR)
      expect(result.data).toMatchObject({
        code: FIREBASE_ERROR_IC.code,
        isFirebaseError: true
      })
      expect(result.message).toBe(FIREBASE_ERROR_IC.message)
      expect(result.name).toBe('INTERNAL_SERVER_ERROR')
    })

    it('should convert FirebaseError with valid code into Exception', () => {
      // Act
      const result = TestSubject.fromFirebaseError(FIREBASE_ERROR_404)

      // Expect
      expect(result.code).toBe(Code.NOT_FOUND)
      expect(result.className).toBe(ClassName.NOT_FOUND)
      expect(result.data).toMatchObject({
        code: FIREBASE_ERROR_404.code,
        isFirebaseError: true
      })
      expect(result.message).toBe(FIREBASE_ERROR_404.message)
      expect(result.name).toBe('NOT_FOUND')
    })
  })

  describe('.fromNextError', () => {
    it('should convert NextError with statusCode into Exception', () => {
      // Act
      const result = TestSubject.fromNextError(NEXT_ERROR_BAD_GATEWAY)

      // Expect
      expect(result.code).toBe(NEXT_ERROR_BAD_GATEWAY.statusCode)
      expect(result.className).toBe(ClassName.BAD_GATEWAY)
      expect(result.data).toMatchObject({ isNextError: true })
      expect(result.message).toBe(NEXT_ERROR_BAD_GATEWAY.message)
      expect(result.name).toBe('BAD_GATEWAY')
    })

    it('should convert NextError without statusCode into Exception', () => {
      // Act
      const result = TestSubject.fromNextError(NEXT_ERROR_NO_CODE)

      // Expect
      expect(result.code).toBe(Code.INTERNAL_SERVER_ERROR)
      expect(result.className).toBe(ClassName.INTERNAL_SERVER_ERROR)
      expect(result.data).toMatchObject({ isNextError: true })
      expect(result.message).toBe(NEXT_ERROR_NO_CODE.message)
      expect(result.name).toBe('INTERNAL_SERVER_ERROR')
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
