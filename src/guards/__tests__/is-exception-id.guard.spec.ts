/**
 * @file Unit Tests - isExceptionId
 * @module exceptions/guards/tests/unit/isExceptionId
 */

import ExceptionCode from 'src/enums/exception-code.enum'
import ExceptionId from 'src/enums/exception-id.enum'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../is-exception-id.guard'

describe('exceptions/unit:guards/isExceptionId', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [ExceptionCode.UNAUTHORIZED] },
    { expected: true, parameters: [ExceptionId.GATEWAY_TIMEOUT] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
