/**
 * @file Type Definitions - Errors
 * @module exceptions/types/Errors
 */

import type { JsonifiableObject } from '@flex-development/tutils'

/**
 * A group of related errors.
 *
 * @template T - Aggregated error type
 */
type Errors<T extends JsonifiableObject = JsonifiableObject> = T[]

export type { Errors as default }
