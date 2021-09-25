import { ExceptionStatusCode } from './exception-status-code.enum'

/**
 * @file Enums - FirebaseErrorStatusCode
 * @module exceptions/enums/FirebaseErrorStatusCode
 */

/**
 * Names of Firebase error codes mapped to HTTP error status codes.
 *
 * - https://github.com/firebase/firebase-admin-node/blob/master/src/utils/error.ts
 */
export enum FirebaseErrorStatusCode {
  ALREADY_EXISTS = ExceptionStatusCode.CONFLICT,
  API_ERROR = ExceptionStatusCode.INTERNAL_SERVER_ERROR,
  APP_DELETED = ExceptionStatusCode.NOT_FOUND,
  ARGUMENT_ERROR = ExceptionStatusCode.BAD_REQUEST,
  AUTHENTICATION_ERROR = ExceptionStatusCode.UNAUTHORIZED,
  BILLING_NOT_ENABLED = ExceptionStatusCode.PAYMENT_REQUIRED,
  CLAIMS_TOO_LARGE = ExceptionStatusCode.PAYLOAD_TOO_LARGE,
  CONFIGURATION_EXISTS = ExceptionStatusCode.CONFLICT,
  CONFIGURATION_NOT_FOUND = ExceptionStatusCode.NOT_FOUND,
  DEVICE_MESSAGE_RATE_EXCEEDED = ExceptionStatusCode.TOO_MANY_REQUESTS,
  DUPLICATE_APP = ExceptionStatusCode.CONFLICT,
  EMAIL_ALREADY_EXISTS = ExceptionStatusCode.CONFLICT,
  FORBIDDEN_CLAIM = ExceptionStatusCode.FORBIDDEN,
  ID_TOKEN_EXPIRED = ExceptionStatusCode.UNAUTHORIZED,
  ID_TOKEN_REVOKED = ExceptionStatusCode.UNAUTHORIZED,
  INSUFFICIENT_PERMISSION = ExceptionStatusCode.UNAUTHORIZED,
  INTERNAL_ERROR = ExceptionStatusCode.INTERNAL_SERVER_ERROR,
  INVALID_APP_NAME = ExceptionStatusCode.BAD_REQUEST,
  INVALID_APP_OPTIONS = ExceptionStatusCode.BAD_REQUEST,
  INVALID_ARGUMENT = ExceptionStatusCode.BAD_REQUEST,
  INVALID_CLAIMS = ExceptionStatusCode.BAD_REQUEST,
  INVALID_CONFIG = ExceptionStatusCode.BAD_REQUEST,
  INVALID_CONTINUE_URI = ExceptionStatusCode.BAD_REQUEST,
  INVALID_CREATION_TIME = ExceptionStatusCode.BAD_REQUEST,
  INVALID_CREDENTIAL = ExceptionStatusCode.BAD_REQUEST,
  INVALID_DATA_PAYLOAD_KEY = ExceptionStatusCode.BAD_REQUEST,
  INVALID_DISABLED_FIELD = ExceptionStatusCode.BAD_REQUEST,
  INVALID_DISPLAY_NAME = ExceptionStatusCode.BAD_REQUEST,
  INVALID_DYNAMIC_LINK_DOMAIN = ExceptionStatusCode.BAD_REQUEST,
  INVALID_EMAIL = ExceptionStatusCode.BAD_REQUEST,
  INVALID_EMAIL_VERIFIED = ExceptionStatusCode.BAD_REQUEST,
  INVALID_ENROLLED_FACTORS = ExceptionStatusCode.BAD_REQUEST,
  INVALID_ENROLLMENT_TIME = ExceptionStatusCode.BAD_REQUEST,
  INVALID_HASH_ALGORITHM = ExceptionStatusCode.BAD_REQUEST,
  INVALID_HASH_BLOCK_SIZE = ExceptionStatusCode.BAD_REQUEST,
  INVALID_HASH_DERIVED_KEY_LENGTH = ExceptionStatusCode.BAD_REQUEST,
  INVALID_HASH_KEY = ExceptionStatusCode.BAD_REQUEST,
  INVALID_HASH_MEMORY_COST = ExceptionStatusCode.BAD_REQUEST,
  INVALID_HASH_PARALLELIZATION = ExceptionStatusCode.BAD_REQUEST,
  INVALID_HASH_ROUNDS = ExceptionStatusCode.BAD_REQUEST,
  INVALID_HASH_SALT_SEPARATOR = ExceptionStatusCode.BAD_REQUEST,
  INVALID_ID_TOKEN = ExceptionStatusCode.UNAUTHORIZED,
  INVALID_INSTANCE_ID = ExceptionStatusCode.UNAUTHORIZED,
  INVALID_LAST_SIGN_IN_TIME = ExceptionStatusCode.BAD_REQUEST,
  INVALID_NAME = ExceptionStatusCode.BAD_REQUEST,
  INVALID_OAUTH_CLIENT_ID = ExceptionStatusCode.BAD_REQUEST,
  INVALID_OPTIONS = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PACKAGE_NAME = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PAGE_TOKEN = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PASSWORD = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PASSWORD_HASH = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PASSWORD_SALT = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PAYLOAD = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PHONE_NUMBER = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PHOTO_URL = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PROJECT_ID = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PROVIDER_DATA = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PROVIDER_ID = ExceptionStatusCode.BAD_REQUEST,
  INVALID_PROVIDER_UID = ExceptionStatusCode.BAD_REQUEST,
  INVALID_RECIPIENT = ExceptionStatusCode.BAD_REQUEST,
  INVALID_REGISTRATION_TOKEN = ExceptionStatusCode.BAD_REQUEST,
  INVALID_SERVER_RESPONSE = ExceptionStatusCode.BAD_REQUEST,
  INVALID_SESSION_COOKIE_DURATION = ExceptionStatusCode.BAD_REQUEST,
  INVALID_TENANT_ID = ExceptionStatusCode.BAD_REQUEST,
  INVALID_TENANT_TYPE = ExceptionStatusCode.BAD_REQUEST,
  INVALID_TESTING_PHONE_NUMBER = ExceptionStatusCode.BAD_REQUEST,
  INVALID_TOKENS_VALID_AFTER_TIME = ExceptionStatusCode.BAD_REQUEST,
  INVALID_UID = ExceptionStatusCode.BAD_REQUEST,
  INVALID_USER_IMPORT = ExceptionStatusCode.BAD_REQUEST,
  MAXIMUM_TEST_PHONE_NUMBER_EXCEEDED = ExceptionStatusCode.FORBIDDEN,
  MAXIMUM_USER_COUNT_EXCEEDED = ExceptionStatusCode.FORBIDDEN,
  MESSAGE_RATE_EXCEEDED = ExceptionStatusCode.TOO_MANY_REQUESTS,
  MISMATCHED_CREDENTIAL = ExceptionStatusCode.UNAUTHORIZED,
  MISMATCHING_TENANT_ID = ExceptionStatusCode.UNAUTHORIZED,
  MISSING_ANDROID_PACKAGE_NAME = ExceptionStatusCode.BAD_REQUEST,
  MISSING_CONFIG = ExceptionStatusCode.BAD_REQUEST,
  MISSING_CONTINUE_URI = ExceptionStatusCode.BAD_REQUEST,
  MISSING_DISPLAY_NAME = ExceptionStatusCode.BAD_REQUEST,
  MISSING_EMAIL = ExceptionStatusCode.BAD_REQUEST,
  MISSING_HASH_ALGORITHM = ExceptionStatusCode.BAD_REQUEST,
  MISSING_IOS_BUNDLE_ID = ExceptionStatusCode.BAD_REQUEST,
  MISSING_ISSUER = ExceptionStatusCode.BAD_REQUEST,
  MISSING_OAUTH_CLIENT_ID = ExceptionStatusCode.BAD_REQUEST,
  MISSING_PROVIDER_ID = ExceptionStatusCode.BAD_REQUEST,
  MISSING_SAML_RELYING_PARTY_CONFIG = ExceptionStatusCode.BAD_REQUEST,
  MISSING_UID = ExceptionStatusCode.BAD_REQUEST,
  NETWORK_ERROR = ExceptionStatusCode.INTERNAL_SERVER_ERROR,
  NETWORK_TIMEOUT = ExceptionStatusCode.REQUEST_TIMEOUT,
  NOT_FOUND = ExceptionStatusCode.NOT_FOUND,
  NO_APP = ExceptionStatusCode.NOT_FOUND,
  OPERATION_NOT_ALLOWED = ExceptionStatusCode.METHOD_NOT_ALLOWED,
  PAYLOAD_SIZE_LIMIT_EXCEEDED = ExceptionStatusCode.PAYLOAD_TOO_LARGE,
  PHONE_NUMBER_ALREADY_EXISTS = ExceptionStatusCode.CONFLICT,
  PROJECT_NOT_FOUND = ExceptionStatusCode.NOT_FOUND,
  QUOTA_EXCEEDED = ExceptionStatusCode.FORBIDDEN,
  REGISTRATION_TOKEN_NOT_REGISTERED = ExceptionStatusCode.UNAUTHORIZED,
  SECOND_FACTOR_LIMIT_EXCEEDED = ExceptionStatusCode.FORBIDDEN,
  SECOND_FACTOR_UID_ALREADY_EXISTS = ExceptionStatusCode.CONFLICT,
  SERVER_UNAVAILABLE = ExceptionStatusCode.INTERNAL_SERVER_ERROR,
  SERVICE_UNAVAILABLE = ExceptionStatusCode.SERVICE_UNAVAILABLE,
  SESSION_COOKIE_EXPIRED = ExceptionStatusCode.UNAUTHORIZED,
  SESSION_COOKIE_REVOKED = ExceptionStatusCode.UNAUTHORIZED,
  TENANT_NOT_FOUND = ExceptionStatusCode.NOT_FOUND,
  THIRD_PARTY_AUTH_ERROR = ExceptionStatusCode.INTERNAL_SERVER_ERROR,
  TOO_MANY_TOPICS = ExceptionStatusCode.BAD_REQUEST,
  TOPICS_MESSAGE_RATE_EXCEEDED = ExceptionStatusCode.TOO_MANY_REQUESTS,
  UID_ALREADY_EXISTS = ExceptionStatusCode.CONFLICT,
  UNABLE_TO_PARSE_RESPONSE = ExceptionStatusCode.UNPROCESSABLE_ENTITY,
  UNAUTHORIZED_DOMAIN = ExceptionStatusCode.UNAUTHORIZED,
  UNKNOWN_ERROR = ExceptionStatusCode.INTERNAL_SERVER_ERROR,
  UNSUPPORTED_FIRST_FACTOR = ExceptionStatusCode.NOT_ACCEPTABLE,
  UNSUPPORTED_SECOND_FACTOR = ExceptionStatusCode.NOT_ACCEPTABLE,
  UNSUPPORTED_TENANT_OPERATION = ExceptionStatusCode.NOT_ACCEPTABLE,
  UNVERIFIED_EMAIL = ExceptionStatusCode.UNAUTHORIZED,
  USER_NOT_DISABLED = ExceptionStatusCode.FORBIDDEN,
  USER_NOT_FOUND = ExceptionStatusCode.NOT_FOUND
}