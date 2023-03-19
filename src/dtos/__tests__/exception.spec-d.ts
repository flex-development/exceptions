/**
 * @file Type Tests - ExceptionDTO
 * @module exceptions/dtos/tests/unit-d/ExceptionDTO
 */

import type * as aggregate from '@flex-development/aggregate-error-ponyfill'
import type {
  JsonifiableObject,
  Nilable,
  ObjectPlain,
  OneOrMany
} from '@flex-development/tutils'
import type TestSubject from '../exception'

describe('unit-d:dtos/ExceptionDTO', () => {
  it('should allow T to exclude index signature', () => {
    expectTypeOf<TestSubject<Error>>().toMatchTypeOf<TestSubject<ObjectPlain>>()
  })

  it('should extend aggregate.Options<Cause>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<aggregate.Options>()
  })

  it('should match [code?: Nilable<Code>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('code')
      .toEqualTypeOf<Nilable<string>>()
  })

  it('should match [errors?: OneOrMany<T> | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('errors')
      .toEqualTypeOf<OneOrMany<JsonifiableObject> | undefined>()
  })

  it('should match [stack?: string | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('stack')
      .toEqualTypeOf<string | undefined>()
  })
})
