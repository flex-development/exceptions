/**
 * @file Type Definitions - ExceptionErrors
 * @module exceptions/types/ExceptionErrors
 */

/**
 * A group of related errors.
 *
 * @template T - Aggergated error type(s)
 */
type ExceptionErrors<T = any> = T[]

export type { ExceptionErrors as default }
