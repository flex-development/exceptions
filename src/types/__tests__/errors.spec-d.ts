/**
 * @file Type Tests - Errors
 * @module exceptions/types/tests/unit-d/Errors
 */

import type { JsonifiableObject, ObjectPlain } from '@flex-development/tutils'
import type TestSubject from '../errors'

describe('unit-d:types/Errors', () => {
  it('should allow T to exclude index signature', () => {
    expectTypeOf<TestSubject<Error>>().toMatchTypeOf<TestSubject<ObjectPlain>>()
  })

  it('should equal T[]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<JsonifiableObject[]>()
  })
})
