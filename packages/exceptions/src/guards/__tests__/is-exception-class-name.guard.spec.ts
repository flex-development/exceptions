import ExceptionClassName from '@packages/exceptions/enums/exception-class-name.enum'
import ExceptionId from '@packages/exceptions/enums/exception-id.enum'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-exception-class-name.guard'

/**
 * @file Unit Tests - isExceptionClassName
 * @module exceptions/guards/tests/unit/isExceptionClassName
 */

describe('exceptions/unit:guards/isExceptionClassName', () => {
  type Case = Testcase<boolean> & { value: any }

  const cases: Case[] = [
    { expected: false, value: ExceptionId.TOO_MANY_REQUESTS },
    { expected: true, value: ExceptionClassName.URI_TOO_LONG }
  ]

  cases.forEach(({ expected, value }) => {
    it(`should return ${expected} given [${value}]`, () => {
      expect(testSubject(value)).to.equal(expected)
    })
  })
})
