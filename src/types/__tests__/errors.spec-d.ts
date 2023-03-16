/**
 * @file Type Tests - Errors
 * @module exceptions/types/tests/unit-d/Errors
 */

import type { JsonifiableObject } from '@flex-development/tutils'
import type TestSubject from '../errors'

describe('unit-d:types/Errors', () => {
  it('should equal T[]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<JsonifiableObject[]>()
  })
})
