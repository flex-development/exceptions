/**
 * @file Unit Tests - isExceptionCode
 * @module exceptions/guards/tests/unit/isExceptionCode
 */

import ExceptionCode from 'src/enums/exception-code.enum'
import ExceptionId from 'src/enums/exception-id.enum'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../is-exception-code.guard'

describe('exceptions/unit:guards/isExceptionCode', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [ExceptionId.I_AM_A_TEAPOT] },
    { expected: true, parameters: [ExceptionCode.PAYLOAD_TOO_LARGE] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
