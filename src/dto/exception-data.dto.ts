import type { ExceptionErrors } from '@/types'

/**
 * @file DTO - ExceptionDataDTO
 * @module dto/ExceptionDataDTO
 */

/**
 * Shape of `ExceptionJSON` `data` property.
 */
export interface ExceptionDataDTO {
  /**
   * Data associated with the exception (not errors).
   */
  [x: string]: any

  /**
   * Array of errors, error object, or null
   */
  errors?: ExceptionErrors
}
