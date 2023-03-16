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

  it('should match [IM_A_TEAPOT = "teapot"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('IM_A_TEAPOT')
      .toMatchTypeOf<'teapot'>()
  })

  it('should match [INSUFFICIENT_STORAGE = "insufficient-storage"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INSUFFICIENT_STORAGE')
      .toMatchTypeOf<'insufficient-storage'>()
  })

  it('should match [INTERNAL_SERVER_ERROR = "internal-server-error"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INTERNAL_SERVER_ERROR')
      .toMatchTypeOf<'internal-server-error'>()
  })

  it('should match [LENGTH_REQUIRED = "length-required"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LENGTH_REQUIRED')
      .toMatchTypeOf<'length-required'>()
  })

  it('should match [LOCKED = "locked"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LOCKED')
      .toMatchTypeOf<'locked'>()
  })

  it('should match [LOOP_DETECTED = "loop-detected"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LOOP_DETECTED')
      .toMatchTypeOf<'loop-detected'>()
  })

  it('should match [METHOD_NOT_ALLOWED = "method-not-allowed"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('METHOD_NOT_ALLOWED')
      .toMatchTypeOf<'method-not-allowed'>()
  })

  it('should match [MISDIRECTED_REQUEST = "misdirected-request"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MISDIRECTED_REQUEST')
      .toMatchTypeOf<'misdirected-request'>()
  })

  it('should match [NETWORK_AUTHENTICATION_REQUIRED = "network-auth-required"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NETWORK_AUTHENTICATION_REQUIRED')
      .toMatchTypeOf<'network-auth-required'>()
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

  it('should match [PRECONDITION_REQUIRED = "precondition-required"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PRECONDITION_REQUIRED')
      .toMatchTypeOf<'precondition-required'>()
  })

  it('should match [PROXY_AUTHENTICATION_REQUIRED = "proxy-auth-required"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROXY_AUTHENTICATION_REQUIRED')
      .toMatchTypeOf<'proxy-auth-required'>()
  })

  it('should match [RANGE_NOT_SATISFIABLE = "range-not-satisfiable"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('RANGE_NOT_SATISFIABLE')
      .toMatchTypeOf<'range-not-satisfiable'>()
  })

  it('should match [REQUEST_HEADERS_TOO_LARGE = "request-headers-too-large"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REQUEST_HEADERS_TOO_LARGE')
      .toMatchTypeOf<'request-headers-too-large'>()
  })

  it('should match [REQUEST_TIMEOUT = "timeout"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REQUEST_TIMEOUT')
      .toMatchTypeOf<'timeout'>()
  })

  it('should match [SERVICE_UNAVAILABLE = "service-unavailable"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SERVICE_UNAVAILABLE')
      .toMatchTypeOf<'service-unavailable'>()
  })

  it('should match [TOO_EARLY = "too-early"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TOO_EARLY')
      .toMatchTypeOf<'too-early'>()
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

  it('should match [UNAVAILABLE_FOR_LEGAL_REASONS = "unavailable-for-legal-reasons"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNAVAILABLE_FOR_LEGAL_REASONS')
      .toMatchTypeOf<'unavailable-for-legal-reasons'>()
  })

  it('should match [UNPROCESSABLE_CONTENT = "unprocessable-entity"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNPROCESSABLE_CONTENT')
      .toMatchTypeOf<'unprocessable-entity'>()
  })

  it('should match [UNSUPPORTED_MEDIA_TYPE = "unsupported-media-type"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNSUPPORTED_MEDIA_TYPE')
      .toMatchTypeOf<'unsupported-media-type'>()
  })

  it('should match [UPGRADE_REQUIRED = "upgrade-required"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UPGRADE_REQUIRED')
      .toMatchTypeOf<'upgrade-required'>()
  })

  it('should match [URI_TOO_LONG = "uri-too-long"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('URI_TOO_LONG')
      .toMatchTypeOf<'uri-too-long'>()
  })

  it('should match [VARIANT_ALSO_NEGOTIATES = "variant-also-negotiates"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('VARIANT_ALSO_NEGOTIATES')
      .toMatchTypeOf<'variant-also-negotiates'>()
  })
})
