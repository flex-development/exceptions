/**
 * @file Unit Tests - isExceptionJSON
 * @module exceptions/guards/tests/unit/isExceptionJSON
 */

import ERROR_AXIOS_404 from '#fixtures/error-axios-404'
import EJSON from '#fixtures/exception-json'
import type { TestcaseFn } from '#tests/interfaces'
import testSubject from '../is-exception-json'

describe('exceptions/unit:guards/isExceptionJSON', () => {
  interface Case extends TestcaseFn<typeof testSubject> {
    is: 'is not' | 'is'
  }

  const cases: Case[] = [
    { expected: false, is: 'is not', parameters: [ERROR_AXIOS_404.response] },
    { expected: true, is: 'is', parameters: [EJSON] }
  ]

  cases.forEach(({ expected, is, parameters }) => {
    it(`should return ${expected} if value ${is} ExceptionJSON`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
