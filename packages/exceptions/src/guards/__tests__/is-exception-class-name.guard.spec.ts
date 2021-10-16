import ExceptionClassName from '@packages/exceptions/enums/exception-class-name.enum'
import ExceptionId from '@packages/exceptions/enums/exception-id.enum'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-exception-class-name.guard'

/**
 * @file Unit Tests - isExceptionClassName
 * @module exceptions/guards/tests/unit/isExceptionClassName
 */

describe('unit:guards/isExceptionClassName', () => {
  type Case = Testcase<boolean> & { value: any }

  const cases: Case[] = [
    { expected: false, value: ExceptionId.TOO_MANY_REQUESTS },
    { expected: true, value: ExceptionClassName.URI_TOO_LONG }
  ]

  it.each<Case>(cases)('should return $expected given $value', testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
