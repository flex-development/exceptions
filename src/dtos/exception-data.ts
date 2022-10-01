/**
 * @file Data Transfer Objects - ExceptionDataDTO
 * @module exceptions/dtos/ExceptionDataDTO
 */

import type { ExceptionData } from '#src/types'
import type { OneOrMany } from '@flex-development/tutils'

/**
 * `Exception` data transfer object.
 *
 * @template T - Error type
 *
 * @extends {ExceptionData}
 */
interface ExceptionDataDTO<T = any> extends ExceptionData {
  /**
   * Single error or group of errors.
   */
  errors?: OneOrMany<T>

  /**
   * Custom message.
   */
  message?: string
}

export type { ExceptionDataDTO as default }
