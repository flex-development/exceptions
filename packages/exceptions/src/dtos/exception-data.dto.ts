import type { OneOrMany } from '@flex-development/tutils'
import type { ExceptionData } from '@packages/exceptions/types'

/**
 * @file Data Transfer Objects - ExceptionDataDTO
 * @module exceptions/dtos/ExceptionDataDTO
 */

/**
 * `Exception` data transfer object.
 *
 * @template T - Error type
 *
 * @extends {ExceptionData}
 */
export interface ExceptionDataDTO<T extends any = any> extends ExceptionData {
  /**
   * Single error or group of errors.
   */
  errors?: OneOrMany<T>

  /**
   * Custom message.
   */
  message?: string
}
