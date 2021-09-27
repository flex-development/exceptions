import type { ExceptionData } from '@packages/exceptions/types'

/**
 * @file Data Transfer Objects - ExceptionDataDTO
 * @module exceptions/dtos/ExceptionDataDTO
 */

/**
 * `Exception` data transfer object.
 *
 * @extends {ExceptionData}
 */
export interface ExceptionDataDTO extends ExceptionData {
  /**
   * Single error or group of errors.
   */
  errors?: Array<any>

  /**
   * Custom message.
   */
  message?: string
}
