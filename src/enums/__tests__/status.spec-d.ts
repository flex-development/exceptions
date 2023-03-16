/**
 * @file Type Tests - Status
 * @module exceptions/enums/tests/unit-d/Status
 */

import type TestSubject from '../status'

describe('unit-d:enums/Status', () => {
  it('should match [BAD_GATEWAY = 502]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BAD_GATEWAY')
      .toMatchTypeOf<502>()
  })

  it('should match [BAD_REQUEST = 400]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('BAD_REQUEST')
      .toMatchTypeOf<400>()
  })

  it('should match [CONFLICT = 409]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CONFLICT')
      .toMatchTypeOf<409>()
  })

  it('should match [EXPECTATION_FAILED = 417]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('EXPECTATION_FAILED')
      .toMatchTypeOf<417>()
  })

  it('should match [FAILED_DEPENDENCY = 424]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FAILED_DEPENDENCY')
      .toMatchTypeOf<424>()
  })

  it('should match [FORBIDDEN = 403]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('FORBIDDEN')
      .toMatchTypeOf<403>()
  })

  it('should match [GATEWAY_TIMEOUT = 504]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GATEWAY_TIMEOUT')
      .toMatchTypeOf<504>()
  })

  it('should match [GONE = 410]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('GONE')
      .toMatchTypeOf<410>()
  })

  it('should match [HTTP_VERSION_NOT_SUPPORTED = 505]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('HTTP_VERSION_NOT_SUPPORTED')
      .toMatchTypeOf<505>()
  })

  it('should match [IM_A_TEAPOT = 418]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('IM_A_TEAPOT')
      .toMatchTypeOf<418>()
  })

  it('should match [INSUFFICIENT_STORAGE = 507]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INSUFFICIENT_STORAGE')
      .toMatchTypeOf<507>()
  })

  it('should match [INTERNAL_SERVER_ERROR = 500]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('INTERNAL_SERVER_ERROR')
      .toMatchTypeOf<500>()
  })

  it('should match [LENGTH_REQUIRED = 411]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LENGTH_REQUIRED')
      .toMatchTypeOf<411>()
  })

  it('should match [LOCKED = 423]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LOCKED')
      .toMatchTypeOf<423>()
  })

  it('should match [LOOP_DETECTED = 508]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('LOOP_DETECTED')
      .toMatchTypeOf<508>()
  })

  it('should match [METHOD_NOT_ALLOWED = 405]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('METHOD_NOT_ALLOWED')
      .toMatchTypeOf<405>()
  })

  it('should match [MISDIRECTED_REQUEST = 421]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('MISDIRECTED_REQUEST')
      .toMatchTypeOf<421>()
  })

  it('should match [NETWORK_AUTHENTICATION_REQUIRED = 511]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NETWORK_AUTHENTICATION_REQUIRED')
      .toMatchTypeOf<511>()
  })

  it('should match [NOT_ACCEPTABLE = 406]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_ACCEPTABLE')
      .toMatchTypeOf<406>()
  })

  it('should match [NOT_EXTENDED = 510]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_EXTENDED')
      .toMatchTypeOf<510>()
  })

  it('should match [NOT_FOUND = 404]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_FOUND')
      .toMatchTypeOf<404>()
  })

  it('should match [NOT_IMPLEMENTED = 501]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('NOT_IMPLEMENTED')
      .toMatchTypeOf<501>()
  })

  it('should match [PAYLOAD_TOO_LARGE = 413]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PAYLOAD_TOO_LARGE')
      .toMatchTypeOf<413>()
  })

  it('should match [PAYMENT_REQUIRED = 402]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PAYMENT_REQUIRED')
      .toMatchTypeOf<402>()
  })

  it('should match [PRECONDITION_FAILED = 412]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PRECONDITION_FAILED')
      .toMatchTypeOf<412>()
  })

  it('should match [PRECONDITION_REQUIRED = 428]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PRECONDITION_REQUIRED')
      .toMatchTypeOf<428>()
  })

  it('should match [PROXY_AUTHENTICATION_REQUIRED = 407]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROXY_AUTHENTICATION_REQUIRED')
      .toMatchTypeOf<407>()
  })

  it('should match [RANGE_NOT_SATISFIABLE = 416]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('RANGE_NOT_SATISFIABLE')
      .toMatchTypeOf<416>()
  })

  it('should match [REQUEST_HEADERS_TOO_LARGE = 431]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REQUEST_HEADERS_TOO_LARGE')
      .toMatchTypeOf<431>()
  })

  it('should match [REQUEST_TIMEOUT = 408]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('REQUEST_TIMEOUT')
      .toMatchTypeOf<408>()
  })

  it('should match [SERVICE_UNAVAILABLE = 503]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('SERVICE_UNAVAILABLE')
      .toMatchTypeOf<503>()
  })

  it('should match [TOO_EARLY = 425]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TOO_EARLY')
      .toMatchTypeOf<425>()
  })

  it('should match [TOO_MANY_REQUESTS = 429]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TOO_MANY_REQUESTS')
      .toMatchTypeOf<429>()
  })

  it('should match [UNAUTHORIZED = 401]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNAUTHORIZED')
      .toMatchTypeOf<401>()
  })

  it('should match [UNAVAILABLE_FOR_LEGAL_REASONS = 451]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNAVAILABLE_FOR_LEGAL_REASONS')
      .toMatchTypeOf<451>()
  })

  it('should match [UNPROCESSABLE_CONTENT = 422]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNPROCESSABLE_CONTENT')
      .toMatchTypeOf<422>()
  })

  it('should match [UNSUPPORTED_MEDIA_TYPE = 415]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UNSUPPORTED_MEDIA_TYPE')
      .toMatchTypeOf<415>()
  })

  it('should match [UPGRADE_REQUIRED = 426]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('UPGRADE_REQUIRED')
      .toMatchTypeOf<426>()
  })

  it('should match [URI_TOO_LONG = 414]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('URI_TOO_LONG')
      .toMatchTypeOf<414>()
  })

  it('should match [VARIANT_ALSO_NEGOTIATES = 506]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('VARIANT_ALSO_NEGOTIATES')
      .toMatchTypeOf<506>()
  })
})
