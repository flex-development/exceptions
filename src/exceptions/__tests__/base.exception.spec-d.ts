/**
 * @file Type Tests - Exception
 * @module exceptions/exceptions/tests/unit-d/Exception
 */

import type AggregateError from '@flex-development/aggregate-error-ponyfill'
import type { JsonifiableObject, ObjectPlain } from '@flex-development/tutils'
import type TestSubject from '../base.exception'

describe('unit-d:exceptions/Exception', () => {
  it('should allow T to exclude index signature', () => {
    expectTypeOf<TestSubject<Error>>().toMatchTypeOf<TestSubject<ObjectPlain>>()
  })

  it('should extend AggregateError<T, Cause & { code: Code }>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<
      AggregateError<JsonifiableObject, JsonifiableObject & { code: string }>
    >()
  })

  it('should match [cause: Cause & { code: Code }]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('cause')
      .toEqualTypeOf<JsonifiableObject & { code: string }>()
  })

  it('should match [data: Data]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<JsonifiableObject>()
  })

  it('should match [stack: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('stack').toBeString()
  })
})
