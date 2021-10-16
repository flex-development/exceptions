import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import type { ValidationError } from 'class-validator'
import type { ExceptionDataDTO } from './exception-data.dto'

/**
 * @file Data Transfer Objects - ValidationExceptionDTO
 * @module exceptions/dtos/ValidationExceptionDTO
 */

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
