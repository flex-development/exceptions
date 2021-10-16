import ERROR_AXIOS_404 from '@packages/exceptions/tests/fixtures/error-axios-404.fixture'
import EJSON from '@packages/exceptions/tests/fixtures/exception-json.fixture'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-exception-json.guard'

/**
 * @file Unit Tests - isExceptionJSON
 * @module exceptions/guards/tests/unit/isExceptionJSON
 */

describe('unit:guards/isExceptionJSON', () => {
  type Case = Testcase<boolean> & {
    is: 'is' | 'is not'
    value: any
  }

  const cases: Case[] = [
    { expected: false, is: 'is not', value: ERROR_AXIOS_404.response },
    { expected: true, is: 'is', value: EJSON }
  ]

  const name = 'should return $expected if ejson $is ExceptionJSON'

  it.each<Case>(cases)(name, testcase => {
    // Arrange
    const { expected, value } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
