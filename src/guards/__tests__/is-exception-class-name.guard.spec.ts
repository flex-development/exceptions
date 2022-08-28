/**
 * @file Unit Tests - isExceptionClassName
 * @module exceptions/guards/tests/unit/isExceptionClassName
 */

import ExceptionClassName from 'src/enums/exception-class-name.enum'
import ExceptionId from 'src/enums/exception-id.enum'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../is-exception-class-name.guard'

describe('exceptions/unit:guards/isExceptionClassName', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: [ExceptionId.TOO_MANY_REQUESTS] },
    { expected: true, parameters: [ExceptionClassName.URI_TOO_LONG] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
