import Exception from '@packages/exceptions/exceptions/base.exception'
import ERROR from '@packages/exceptions/tests/fixtures/error.fixture'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-exception.guard'

/**
 * @file Unit Tests - isException
 * @module exceptions/guards/tests/unit/isException
 */

describe('unit:guards/isException', () => {
  type Case = Testcase<boolean> & {
    is: 'is' | 'is not'
    value: any
  }

  const cases: Case[] = [
    { expected: false, is: 'is not', value: ERROR },
    { expected: true, is: 'is', value: new Exception() }
  ]

  const name = 'should return $expected if error $is Exception'

  it.each<Case>(cases)(name, testcase => {
    // Arrange
    const { value, expected } = testcase

    // Act + Expect
    expect(testSubject(value)).toBe(expected)
  })
})
