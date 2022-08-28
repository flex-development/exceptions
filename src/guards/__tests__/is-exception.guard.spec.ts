/**
 * @file Unit Tests - isException
 * @module exceptions/guards/tests/unit/isException
 */

import ERROR from 'fixtures/error'
import Exception from 'src/exceptions/base.exception'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../is-exception.guard'

describe('exceptions/unit:guards/isException', () => {
  interface Case extends TestcaseFn<typeof testSubject> {
    is: 'is not' | 'is'
  }

  const cases: Case[] = [
    { expected: false, is: 'is not', parameters: [ERROR] },
    { expected: true, is: 'is', parameters: [new Exception()] }
  ]

  cases.forEach(({ expected, is, parameters }) => {
    it(`should return ${expected} if value ${is} Exception`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
