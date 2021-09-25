import type { ExceptionDataDTO } from '@packages/exceptions/dtos'
import {
  ExceptionClassName as ClassName,
  ExceptionStatusCode as Code
} from '@packages/exceptions/enums'
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
  describe('exports', () => {
    it('should export class by default', () => {
      expect(TestSubject).toBeDefined()
      expect(TestSubject.constructor.name).toBe('Function')
    })
  })

  describe('constructor', () => {
    describe('#errors', () => {
      it('should === data.errors if array', () => {
        const data = { errors: [] }
        const Subject = new TestSubject(Code.BAD_REQUEST, undefined, data)

        expect(Subject.data).toMatchObject({})
        expect({ errors: Subject.errors }).toMatchObject(data)
      })

      it('should === data.errors if plain object', () => {
        const data = { errors: { test: true } }
        const Subject = new TestSubject(Code.LENGTH_REQUIRED, undefined, data)

        expect(Subject.data).toMatchObject({})
        expect({ errors: Subject.errors }).toMatchObject(data)
      })

      it('should === null if data.errors schema is invalid', () => {
        const data = { errors: 5 } as unknown as ExceptionDataDTO
        const Subject = new TestSubject(Code.NOT_ACCEPTABLE, undefined, data)

        expect(Subject.data).toMatchObject({})
        expect(Subject.errors).toBe(null)
      })
    })

    describe('#data', () => {
      const properties = ['errors', 'message']

      it(`should omit properties: [${properties}]`, () => {
        const data = { errors: { test: true }, foo: true, message: 'Test' }
        const Subject = new TestSubject(Code.NOT_FOUND, undefined, data)

        expect(Subject.data.errors).not.toBeDefined()
        expect(Subject.data.message).not.toBeDefined()
        expect(Subject.data).toMatchObject({ foo: data.foo })
      })
    })

    describe('#message', () => {
      it('should === default exception message', () => {
        const Subject = new TestSubject()

        expect(Subject.message).toBe(DEM)
      })

      it('should === data.message', () => {
        const data = { message: 'Test override message' }
        const Subject = new TestSubject(Code.MISDIRECTED, undefined, data)

        expect(Subject.message).toBe(data.message)
        expect(Subject.data.message).not.toBeDefined()
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
      const result = TestSubject.fromAxiosError(AXIOS_ERROR_404)

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
      const result = TestSubject.fromAxiosError(AXIOS_ERROR_NO_RES)

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
      const result = TestSubject.fromFirebaseError(FIREBASE_ERROR_IC)

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
      const result = TestSubject.fromFirebaseError(FIREBASE_ERROR_404)

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
      const result = TestSubject.fromNextError(NEXT_ERROR_BAD_GATEWAY)

      expect(result.code).toBe(NEXT_ERROR_BAD_GATEWAY.statusCode)
      expect(result.className).toBe(ClassName.BAD_GATEWAY)
      expect(result.data).toMatchObject({ isNextError: true })
      expect(result.message).toBe(NEXT_ERROR_BAD_GATEWAY.message)
      expect(result.name).toBe('BAD_GATEWAY')
    })

    it('should convert NextError without statusCode into Exception', () => {
      const result = TestSubject.fromNextError(NEXT_ERROR_NO_CODE)

      expect(result.code).toBe(Code.INTERNAL_SERVER_ERROR)
      expect(result.className).toBe(ClassName.INTERNAL_SERVER_ERROR)
      expect(result.data).toMatchObject({ isNextError: true })
      expect(result.message).toBe(NEXT_ERROR_NO_CODE.message)
      expect(result.name).toBe('INTERNAL_SERVER_ERROR')
    })
  })

  describe('#toJSON', () => {
    it('should return json representation of exception', () => {
      const code = Code.I_AM_A_TEAPOT
      const data = { errors: { test: true }, foo: '' }
      const message = 'Test error message'

      const Subject = new TestSubject(code, message, data)

      expect(Subject.toJSON()).toMatchObject({
        className: ClassName.I_AM_A_TEAPOT,
        code,
        data: { foo: data.foo },
        errors: data.errors,
        message,
        name: 'I_AM_A_TEAPOT'
      })
    })
  })
})
