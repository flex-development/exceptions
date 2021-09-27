/**
 * @file Type Definitions - ExceptionErrors
 * @module exceptions/types/ExceptionErrors
 */

/**
 * A group of related errors.
 *
 * @template T - Error type
 */
export type ExceptionErrors<T extends any = any> = Array<T>
