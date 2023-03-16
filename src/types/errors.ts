/**
 * @file Type Definitions - ExceptionErrors
 * @module exceptions/types/ExceptionErrors
 */

/**
 * A group of related errors.
 *
 * @template T - Aggregated error type
 */
type ExceptionErrors<T = any> = T[]

export type { ExceptionErrors as default }
