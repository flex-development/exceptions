/**
 * @file Type Tests - HttpExceptionDTO
 * @module exceptions/dtos/tests/unit-d/HttpExceptionDTO
 */

import type ExceptionDTO from '../exception'
import type TestSubject from '../exception-http'

describe('unit-d:dtos/HttpExceptionDTO', () => {
  it('should extend ExceptionDTO<T, Cause, Code>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<ExceptionDTO>()
  })
})
