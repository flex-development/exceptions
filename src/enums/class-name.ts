/**
 * @file Enums - ClassName
 * @module exceptions/enums/ClassName
 */

/**
 * HTTP exception names mapped to CSS class names.
 *
 * @see https://developer.mozilla.org/docs/Web/HTTP/Status#client_error_responses
 * @see https://developer.mozilla.org/docs/Web/HTTP/Status#server_error_responses
 *
 * @enum {Lowercase<string>}
 */
enum ClassName {
  BAD_GATEWAY = 'bad-gateway',
  BAD_REQUEST = 'bad-request',
  CONFLICT = 'conflict',
  EXPECTATION_FAILED = 'expectation-failed',
  FAILED_DEPENDENCY = 'failed-dependency',
  FORBIDDEN = 'forbidden',
  GATEWAY_TIMEOUT = 'gateway-timeout',
  GONE = 'gone',
  HTTP_VERSION_NOT_SUPPORTED = 'unsupported-http-version',
  IM_A_TEAPOT = 'teapot',
  INSUFFICIENT_STORAGE = 'insufficient-storage',
  INTERNAL_SERVER_ERROR = 'internal-server-error',
  LENGTH_REQUIRED = 'length-required',
  LOCKED = 'locked',
  LOOP_DETECTED = 'loop-detected',
  METHOD_NOT_ALLOWED = 'method-not-allowed',
  MISDIRECTED_REQUEST = 'misdirected-request',
  NETWORK_AUTHENTICATION_REQUIRED = 'network-auth-required',
  NOT_ACCEPTABLE = 'not-acceptable',
  NOT_EXTENDED = 'not-extended',
  NOT_FOUND = 'not-found',
  NOT_IMPLEMENTED = 'not-implemented',
  PAYLOAD_TOO_LARGE = 'payload-too-large',
  PAYMENT_REQUIRED = 'payment-error',
  PRECONDITION_FAILED = 'precondition-failed',
  PRECONDITION_REQUIRED = 'precondition-required',
  PROXY_AUTHENTICATION_REQUIRED = 'proxy-auth-required',
  RANGE_NOT_SATISFIABLE = 'range-not-satisfiable',
  REQUEST_HEADERS_TOO_LARGE = 'request-headers-too-large',
  REQUEST_TIMEOUT = 'timeout',
  SERVICE_UNAVAILABLE = 'service-unavailable',
  TOO_EARLY = 'too-early',
  TOO_MANY_REQUESTS = 'too-many-requests',
  UNAUTHORIZED = 'not-authenticated',
  UNAVAILABLE_FOR_LEGAL_REASONS = 'unavailable-for-legal-reasons',
  UNPROCESSABLE_CONTENT = 'unprocessable-entity',
  UNSUPPORTED_MEDIA_TYPE = 'unsupported-media-type',
  UPGRADE_REQUIRED = 'upgrade-required',
  URI_TOO_LONG = 'uri-too-long',
  VARIANT_ALSO_NEGOTIATES = 'variant-also-negotiates'
}

export default ClassName
