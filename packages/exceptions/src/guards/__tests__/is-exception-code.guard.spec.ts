import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import ExceptionId from '@packages/exceptions/enums/exception-id.enum'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../is-exception-code.guard'

/**
 * @file Unit Tests - isExceptionCode
 * @module exceptions/guards/tests/unit/isExceptionCode
 */

describe('exceptions/unit:guards/isExceptionCode', () => {
  type Case = Testcase<boolean> & { value: any }

  const cases: Case[] = [
    { expected: false, value: ExceptionId.I_AM_A_TEAPOT },
    { expected: true, value: ExceptionCode.PAYLOAD_TOO_LARGE }
  ]

  cases.forEach(({ expected, value }) => {
    it(`should return ${expected} given [${value}]`, () => {
      expect(testSubject(value)).to.equal(expected)
    })
  })
})
