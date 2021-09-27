import type { JSONValue } from '@flex-development/tutils'

/**
 * @file Type Definitions - ExceptionData
 * @module exceptions/types/ExceptionData
 */

/**
 * Additional `Exception` data.
 */
export type ExceptionData = {
  [x: string]: JSONValue | undefined | unknown
}
