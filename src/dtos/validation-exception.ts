/**
 * @file Data Transfer Objects - ValidationExceptionDTO
 * @module exceptions/dtos/ValidationExceptionDTO
 */

import type { ValidationError } from 'class-validator'
import type ExceptionCode from 'src/enums/exception-code'
import type ExceptionDataDTO from './exception-data'

/**
 * `ValidationExceptionData` data transfer object.
 *
 * @extends {ExceptionDataDTO}
 */
export interface ValidationExceptionDTO
  extends ExceptionDataDTO<ValidationError> {
  /**
   * HTTP error response status code.
   *
   * @default ExceptionCode.UNPROCESSABLE_ENTITY
   */
  code?: ExceptionCode
}

export type { ValidationExceptionDTO as default }
