import type { ExceptionJSON } from '@packages/exceptions'
import type { ValidationExceptionDTO } from '@packages/exceptions/dtos'
import { ExceptionCode } from '@packages/exceptions/enums'
import ERRORS from '@packages/exceptions/tests/fixtures/validation-errors.fixture'
import type { Testcase } from '@tests/utils/types'
import TestSubject from '../validation.exception'

/**
 * @file Unit Tests - ValidationException
 * @module exceptions/exceptions/tests/unit/ValidationException
 */

describe('unit:exceptions/ValidationException', () => {
  type Case = Testcase<Pick<ExceptionJSON, 'code' | 'data' | 'message'>> & {
    do: string
    dto: Partial<ValidationExceptionDTO>
  }

  const MESSAGE = `Model validation failure: [title,text]`

  const cases: Case[] = [
    {
      do: 'create ValidationException',
      dto: { options: {} },
      expected: {
        code: ExceptionCode.UNPROCESSABLE_ENTITY,
        data: { isExceptionJSON: true, options: {} },
        message: MESSAGE
      }
    },
    {
      do: 'override default code',
      dto: { code: ExceptionCode.BAD_REQUEST },
      expected: {
        code: ExceptionCode.BAD_REQUEST,
        data: { isExceptionJSON: true },
        message: MESSAGE
      }
    },
    {
      do: 'override default message',
      dto: { id: 42, message: 'user id must be belong to existing user' },
      expected: {
        code: ExceptionCode.UNPROCESSABLE_ENTITY,
        data: { id: 42, isExceptionJSON: true },
        message: 'user id must be belong to existing user'
      }
    }
  ]

  it.each<Case>(cases)('should $do', testcase => {
    // Arrange
    const { dto, expected } = testcase

    // Act
    const result = new TestSubject('Model', { ...dto, errors: ERRORS })

    // Expect
    expect(result.code).toBe(expected.code)
    expect(result.toJSON().data).toStrictEqual(expected.data)
    expect(result.message).toBe(expected.message)
    expect(result.name).toBe('ValidationException')
  })
})
