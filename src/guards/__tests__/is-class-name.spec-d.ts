/**
 * @file Type Tests - isClassName
 * @module exceptions/guards/tests/unit-d/isClassName
 */

import type { ClassName } from '#src/enums'
import type testSubject from '../is-class-name'

describe('unit-d:guards/isClassName', () => {
  it('should guard ClassName', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<ClassName>()
  })
})
