/**
 * @file Type Tests - ClassName
 * @module exceptions/enums/tests/unit-d/ClassName
 */

import type TestSubject from '../class-name'

describe('unit-d:enums/ClassName', () => {
  it('should match [BAD_GATEWAY = "bad-gateway"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BAD_GATEWAY')
      .toMatchTypeOf<'bad-gateway'>()
  })

  it('should match [BAD_REQUEST = "bad-request"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BAD_REQUEST')
      .toMatchTypeOf<'bad-request'>()
  })

  it('should match [CONFLICT = "conflict"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CONFLICT')
      .toMatchTypeOf<'conflict'>()
  })

  it('should match [EXPECTATION_FAILED = "expectation-failed"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EXPECTATION_FAILED')
      .toMatchTypeOf<'expectation-failed'>()
  })

  it('should match [FAILED_DEPENDENCY = "failed-dependency"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FAILED_DEPENDENCY')
      .toMatchTypeOf<'failed-dependency'>()
  })

  it('should match [FORBIDDEN = "forbidden"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FORBIDDEN')
      .toMatchTypeOf<'forbidden'>()
  })

  it('should match [GATEWAY_TIMEOUT = "gateway-timeout"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GATEWAY_TIMEOUT')
      .toMatchTypeOf<'gateway-timeout'>()
  })

  it('should match [GONE = "gone"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GONE')
      .toMatchTypeOf<'gone'>()
  })

  it('should match [HTTP_VERSION_NOT_SUPPORTED = "unsupported-http-version"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('HTTP_VERSION_NOT_SUPPORTED')
      .toMatchTypeOf<'unsupported-http-version'>()
  })

  it('should match [INTERNAL_SERVER_ERROR = "internal-server-error"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INTERNAL_SERVER_ERROR')
      .toMatchTypeOf<'internal-server-error'>()
  })

  it('should match [I_AM_A_TEAPOT = "teapot"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('I_AM_A_TEAPOT')
      .toMatchTypeOf<'teapot'>()
  })

  it('should match [LENGTH_REQUIRED = "length-required"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LENGTH_REQUIRED')
      .toMatchTypeOf<'length-required'>()
  })

  it('should match [METHOD_NOT_ALLOWED = "method-not-allowed"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('METHOD_NOT_ALLOWED')
      .toMatchTypeOf<'method-not-allowed'>()
  })

  it('should match [MISDIRECTED = "misdirected"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MISDIRECTED')
      .toMatchTypeOf<'misdirected'>()
  })

  it('should match [NOT_ACCEPTABLE = "not-acceptable"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_ACCEPTABLE')
      .toMatchTypeOf<'not-acceptable'>()
  })

  it('should match [NOT_FOUND = "not-found"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_FOUND')
      .toMatchTypeOf<'not-found'>()
  })

  it('should match [NOT_IMPLEMENTED = "not-implemented"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_IMPLEMENTED')
      .toMatchTypeOf<'not-implemented'>()
  })

  it('should match [PAYLOAD_TOO_LARGE = "payload-too-large"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PAYLOAD_TOO_LARGE')
      .toMatchTypeOf<'payload-too-large'>()
  })

  it('should match [PAYMENT_REQUIRED = "payment-error"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PAYMENT_REQUIRED')
      .toMatchTypeOf<'payment-error'>()
  })

  it('should match [PRECONDITION_FAILED = "precondition-failed"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PRECONDITION_FAILED')
      .toMatchTypeOf<'precondition-failed'>()
  })

  it('should match [PROXY_AUTHENTICATION_REQUIRED = "proxy-auth-required"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROXY_AUTHENTICATION_REQUIRED')
      .toMatchTypeOf<'proxy-auth-required'>()
  })

  it('should match [REQUESTED_RANGE_NOT_SATISFIABLE = "range-not-satisfiable"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REQUESTED_RANGE_NOT_SATISFIABLE')
      .toMatchTypeOf<'range-not-satisfiable'>()
  })

  it('should match [REQUEST_TIMEOUT = "timeout"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REQUEST_TIMEOUT')
      .toMatchTypeOf<'timeout'>()
  })

  it('should match [SERVICE_UNAVAILABLE = "unavailable"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SERVICE_UNAVAILABLE')
      .toMatchTypeOf<'unavailable'>()
  })

  it('should match [TOO_MANY_REQUESTS = "too-many-requests"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TOO_MANY_REQUESTS')
      .toMatchTypeOf<'too-many-requests'>()
  })

  it('should match [UNAUTHORIZED = "not-authenticated"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNAUTHORIZED')
      .toMatchTypeOf<'not-authenticated'>()
  })

  it('should match [UNPROCESSABLE_ENTITY = "unprocessable-entity"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNPROCESSABLE_ENTITY')
      .toMatchTypeOf<'unprocessable-entity'>()
  })

  it('should match [UNSUPPORTED_MEDIA_TYPE = "unsupported-media-type"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNSUPPORTED_MEDIA_TYPE')
      .toMatchTypeOf<'unsupported-media-type'>()
  })

  it('should match [URI_TOO_LONG = "uri-too-long"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('URI_TOO_LONG')
      .toMatchTypeOf<'uri-too-long'>()
  })
})
