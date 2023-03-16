/**
 * @file Type Tests - HttpExceptionJSON
 * @module exceptions/interfaces/tests/unit-d/HttpExceptionJSON
 */

import type { ClassName, Status, StatusName } from '#src/enums'
import type ExceptionJSON from '../exception-json'
import type TestSubject from '../exception-json-http'

describe('unit-d:interfaces/HttpExceptionJSON', () => {
  it('should extend ExceptionJSON<T, Data, Cause, Code>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<ExceptionJSON>()
  })

  it('should match [classname: ClassName]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('classname')
      .toEqualTypeOf<ClassName>()
  })

  it('should match [name: StatusName]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<StatusName>()
  })

  it('should match [status: Status]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('status').toEqualTypeOf<Status>()
  })
})
