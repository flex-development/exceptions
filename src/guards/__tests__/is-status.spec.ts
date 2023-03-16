/**
 * @file Unit Tests - isStatus
 * @module exceptions/guards/tests/unit/isStatus
 */

import { Status, StatusName } from '#src/enums'
import testSubject from '../is-status'

describe('unit:guards/isStatus', () => {
  it('should return false if value is not Status', () => {
    expect(testSubject(StatusName.IM_A_TEAPOT)).to.be.false
  })

  it('should return true if value is Status', () => {
    expect(testSubject(Status.PAYLOAD_TOO_LARGE)).to.be.true
  })
})
