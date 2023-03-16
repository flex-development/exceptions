/**
 * @file Type Tests - isStatusName
 * @module exceptions/guards/tests/unit-d/isStatusName
 */

import type { StatusName } from '#src/enums'
import type testSubject from '../is-status-name'

describe('unit-d:guards/isStatusName', () => {
  it('should guard StatusName', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<StatusName>()
  })
})
