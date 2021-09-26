import type { ObjectPlain } from '@flex-development/tutils/types/ObjectPlain'

/**
 * @file Type Definitions - ExceptionErrors
 * @module exceptions/types/ExceptionErrors
 */

/**
 * `Exception#errors` shape.
 */
export type ExceptionErrors = ObjectPlain | (ObjectPlain | string)[] | null
