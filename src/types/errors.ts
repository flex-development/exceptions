/**
 * @file Type Definitions - Errors
 * @module exceptions/types/Errors
 */

import type { JsonifiableObject, ObjectPlain } from '@flex-development/tutils'

/**
 * A group of related errors.
 *
 * @template T - Aggregated error type
 */
type Errors<T extends ObjectPlain = JsonifiableObject> = T[]

export type { Errors as default }
