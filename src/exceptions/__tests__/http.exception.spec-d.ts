/**
 * @file Type Tests - HttpException
 * @module exceptions/exceptions/tests/unit-d/HttpException
 */

import type { ClassName, Status, StatusName } from '#src/enums'
import type Exception from '../base.exception'
import type TestSubject from '../http.exception'

describe('unit-d:exceptions/HttpException', () => {
  it('should extend Exception<T, Data, Cause, Code>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Exception>()
  })

  it('should match [classname: ClassName]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('classname')
      .toEqualTypeOf<ClassName>()
  })

  it('should match [id: StatusName]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('id').toEqualTypeOf<StatusName>()
  })

  it('should match [status: Status]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('status').toEqualTypeOf<Status>()
  })
})
