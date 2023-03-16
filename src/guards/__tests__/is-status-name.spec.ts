/**
 * @file Unit Tests - isStatusName
 * @module exceptions/guards/tests/unit/isStatusName
 */

import { Status, StatusName } from '#src/enums'
import testSubject from '../is-status-name'

describe('unit:guards/isStatusName', () => {
  it('should return false if value is not StatusName', () => {
    expect(testSubject(Status.UNAUTHORIZED)).to.be.false
  })

  it('should return true is value is StatusName', () => {
    expect(testSubject(StatusName.GATEWAY_TIMEOUT)).to.be.true
  })
})
