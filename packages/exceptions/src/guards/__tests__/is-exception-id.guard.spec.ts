import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import ExceptionId from '@packages/exceptions/enums/exception-id.enum'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-exception-id.guard'

/**
 * @file Unit Tests - isExceptionId
 * @module exceptions/guards/tests/unit/isExceptionId
 */

describe('exceptions/unit:guards/isExceptionId', () => {
  type Case = Testcase<boolean> & { value: any }

  const cases: Case[] = [
    { expected: false, value: ExceptionCode.UNAUTHORIZED },
    { expected: true, value: ExceptionId.I_AM_A_TEAPOT }
  ]

  cases.forEach(({ expected, value }) => {
    it(`should return ${expected} given [${value}]`, () => {
      expect(testSubject(value)).to.equal(expected)
    })
  })
})
