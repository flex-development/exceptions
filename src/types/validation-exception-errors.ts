/**
 * @file Type Definitions - ValidationExceptionErrors
 * @module exceptions/types/ValidationExceptionErrors
 */

import type { ValidationError } from 'class-validator'
import type ExceptionErrors from './exception-errors'

/**
 * Aggregated `ValidationException` errors.
 */
type ValidationExceptionErrors = ExceptionErrors<ValidationError>

export type { ValidationExceptionErrors as default }
