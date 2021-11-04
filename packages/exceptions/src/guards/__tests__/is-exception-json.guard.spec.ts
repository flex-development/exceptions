import ERROR_AXIOS_404 from '@packages/exceptions/tests/fixtures/error-axios-404.fixture'
import EJSON from '@packages/exceptions/tests/fixtures/exception-json.fixture'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-exception-json.guard'

/**
 * @file Unit Tests - isExceptionJSON
 * @module exceptions/guards/tests/unit/isExceptionJSON
 */

describe('exceptions/unit:guards/isExceptionJSON', () => {
  type Case = Testcase<boolean> & {
    is: 'is' | 'is not'
    value: any
  }

  const cases: Case[] = [
    { expected: false, is: 'is not', value: ERROR_AXIOS_404.response },
    { expected: true, is: 'is', value: EJSON }
  ]

  cases.forEach(({ expected, is, value }) => {
    it(`should return ${expected} if ejson ${is} ExceptionJSON`, () => {
      expect(testSubject(value)).to.deep.equal(expected)
    })
  })
})
