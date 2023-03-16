/**
 * @file Unit Tests - isClassName
 * @module exceptions/guards/tests/unit/isClassName
 */

import { ClassName, StatusName } from '#src/enums'
import testSubject from '../is-class-name'

describe('unit:guards/isClassName', () => {
  it('should return false if value is not ClassName', () => {
    expect(testSubject(StatusName.TOO_MANY_REQUESTS)).to.be.false
  })

  it('should return true if value is ClassName', () => {
    expect(testSubject(ClassName.URI_TOO_LONG)).to.be.true
  })
})
