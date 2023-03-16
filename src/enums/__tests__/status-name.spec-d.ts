/**
 * @file Type Tests - StatusName
 * @module exceptions/enums/tests/unit-d/StatusName
 */

import type TestSubject from '../status-name'

describe('unit-d:enums/StatusName', () => {
  it('should match [BAD_GATEWAY = "BAD_GATEWAY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BAD_GATEWAY')
      .toMatchTypeOf<'BAD_GATEWAY'>()
  })

  it('should match [BAD_REQUEST = "BAD_REQUEST"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BAD_REQUEST')
      .toMatchTypeOf<'BAD_REQUEST'>()
  })

  it('should match [CONFLICT = "CONFLICT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CONFLICT')
      .toMatchTypeOf<'CONFLICT'>()
  })

  it('should match [EXPECTATION_FAILED = "EXPECTATION_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EXPECTATION_FAILED')
      .toMatchTypeOf<'EXPECTATION_FAILED'>()
  })

  it('should match [FAILED_DEPENDENCY = "FAILED_DEPENDENCY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FAILED_DEPENDENCY')
      .toMatchTypeOf<'FAILED_DEPENDENCY'>()
  })

  it('should match [FORBIDDEN = "FORBIDDEN"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FORBIDDEN')
      .toMatchTypeOf<'FORBIDDEN'>()
  })

  it('should match [GATEWAY_TIMEOUT = "GATEWAY_TIMEOUT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GATEWAY_TIMEOUT')
      .toMatchTypeOf<'GATEWAY_TIMEOUT'>()
  })

  it('should match [GONE = "GONE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GONE')
      .toMatchTypeOf<'GONE'>()
  })

  it('should match [HTTP_VERSION_NOT_SUPPORTED = "HTTP_VERSION_NOT_SUPPORTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('HTTP_VERSION_NOT_SUPPORTED')
      .toMatchTypeOf<'HTTP_VERSION_NOT_SUPPORTED'>()
  })

  it('should match [INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INTERNAL_SERVER_ERROR')
      .toMatchTypeOf<'INTERNAL_SERVER_ERROR'>()
  })

  it('should match [I_AM_A_TEAPOT = "I_AM_A_TEAPOT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('I_AM_A_TEAPOT')
      .toMatchTypeOf<'I_AM_A_TEAPOT'>()
  })

  it('should match [LENGTH_REQUIRED = "LENGTH_REQUIRED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LENGTH_REQUIRED')
      .toMatchTypeOf<'LENGTH_REQUIRED'>()
  })

  it('should match [METHOD_NOT_ALLOWED = "METHOD_NOT_ALLOWED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('METHOD_NOT_ALLOWED')
      .toMatchTypeOf<'METHOD_NOT_ALLOWED'>()
  })

  it('should match [MISDIRECTED = "MISDIRECTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MISDIRECTED')
      .toMatchTypeOf<'MISDIRECTED'>()
  })

  it('should match [NOT_ACCEPTABLE = "NOT_ACCEPTABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_ACCEPTABLE')
      .toMatchTypeOf<'NOT_ACCEPTABLE'>()
  })

  it('should match [NOT_FOUND = "NOT_FOUND"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_FOUND')
      .toMatchTypeOf<'NOT_FOUND'>()
  })

  it('should match [NOT_IMPLEMENTED = "NOT_IMPLEMENTED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_IMPLEMENTED')
      .toMatchTypeOf<'NOT_IMPLEMENTED'>()
  })

  it('should match [PAYLOAD_TOO_LARGE = "PAYLOAD_TOO_LARGE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PAYLOAD_TOO_LARGE')
      .toMatchTypeOf<'PAYLOAD_TOO_LARGE'>()
  })

  it('should match [PAYMENT_REQUIRED = "PAYMENT_REQUIRED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PAYMENT_REQUIRED')
      .toMatchTypeOf<'PAYMENT_REQUIRED'>()
  })

  it('should match [PRECONDITION_FAILED = "PRECONDITION_FAILED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PRECONDITION_FAILED')
      .toMatchTypeOf<'PRECONDITION_FAILED'>()
  })

  it('should match [PROXY_AUTHENTICATION_REQUIRED = "PROXY_AUTHENTICATION_REQUIRED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROXY_AUTHENTICATION_REQUIRED')
      .toMatchTypeOf<'PROXY_AUTHENTICATION_REQUIRED'>()
  })

  it('should match [REQUESTED_RANGE_NOT_SATISFIABLE = "REQUESTED_RANGE_NOT_SATISFIABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REQUESTED_RANGE_NOT_SATISFIABLE')
      .toMatchTypeOf<'REQUESTED_RANGE_NOT_SATISFIABLE'>()
  })

  it('should match [REQUEST_TIMEOUT = "REQUEST_TIMEOUT"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REQUEST_TIMEOUT')
      .toMatchTypeOf<'REQUEST_TIMEOUT'>()
  })

  it('should match [SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SERVICE_UNAVAILABLE')
      .toMatchTypeOf<'SERVICE_UNAVAILABLE'>()
  })

  it('should match [TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TOO_MANY_REQUESTS')
      .toMatchTypeOf<'TOO_MANY_REQUESTS'>()
  })

  it('should match [UNAUTHORIZED = "UNAUTHORIZED"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNAUTHORIZED')
      .toMatchTypeOf<'UNAUTHORIZED'>()
  })

  it('should match [UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNPROCESSABLE_ENTITY')
      .toMatchTypeOf<'UNPROCESSABLE_ENTITY'>()
  })

  it('should match [UNSUPPORTED_MEDIA_TYPE = "UNSUPPORTED_MEDIA_TYPE"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNSUPPORTED_MEDIA_TYPE')
      .toMatchTypeOf<'UNSUPPORTED_MEDIA_TYPE'>()
  })

  it('should match [URI_TOO_LONG = "URI_TOO_LONG"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('URI_TOO_LONG')
      .toMatchTypeOf<'URI_TOO_LONG'>()
  })
})
