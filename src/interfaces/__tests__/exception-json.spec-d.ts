/**
 * @file Type Tests - ExceptionJSON
 * @module exceptions/interfaces/tests/unit-d/ExceptionJSON
 */

import type { Errors } from '#src/types'
import type { JsonifiableObject, ObjectPlain } from '@flex-development/tutils'
import type TestSubject from '../exception-json'

describe('unit-d:interfaces/ExceptionJSON', () => {
  it('should allow T to exclude index signature', () => {
    expectTypeOf<TestSubject<Error>>().toMatchTypeOf<TestSubject<ObjectPlain>>()
  })

  it('should match [cause: Readonly<Cause & { code: Code }>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('cause')
      .toEqualTypeOf<Readonly<JsonifiableObject> & { code: string }>()
  })

  it('should match [data: Data]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<JsonifiableObject>()
  })

  it('should match [errors: Errors<T> | Readonly<Errors<T>>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('errors')
      .toEqualTypeOf<Errors | Readonly<Errors>>()
  })

  it('should match [message: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('message').toBeString()
  })
})
