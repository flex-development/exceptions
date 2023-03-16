/**
 * @file Type Tests - isStatus
 * @module exceptions/guards/tests/unit-d/isStatus
 */

import type { Status } from '#src/enums'
import type testSubject from '../is-status'

describe('unit-d:guards/isStatus', () => {
  it('should guard Status', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<Status>()
  })
})
