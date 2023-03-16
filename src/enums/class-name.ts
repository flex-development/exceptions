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
  INTERNAL_SERVER_ERROR = 'internal-server-error',
  I_AM_A_TEAPOT = 'teapot',
  LENGTH_REQUIRED = 'length-required',
  METHOD_NOT_ALLOWED = 'method-not-allowed',
  MISDIRECTED = 'misdirected',
  NOT_ACCEPTABLE = 'not-acceptable',
  NOT_FOUND = 'not-found',
  NOT_IMPLEMENTED = 'not-implemented',
  PAYLOAD_TOO_LARGE = 'payload-too-large',
  PAYMENT_REQUIRED = 'payment-error',
  PRECONDITION_FAILED = 'precondition-failed',
  PROXY_AUTHENTICATION_REQUIRED = 'proxy-auth-required',
  REQUESTED_RANGE_NOT_SATISFIABLE = 'range-not-satisfiable',
  REQUEST_TIMEOUT = 'timeout',
  SERVICE_UNAVAILABLE = 'unavailable',
  TOO_MANY_REQUESTS = 'too-many-requests',
  UNAUTHORIZED = 'not-authenticated',
  UNPROCESSABLE_ENTITY = 'unprocessable-entity',
  UNSUPPORTED_MEDIA_TYPE = 'unsupported-media-type',
  URI_TOO_LONG = 'uri-too-long'
}

export default ClassName
