import type { ValidationError } from 'class-validator'
import type { ExceptionErrors } from './exception-errors.type'

/**
 * @file Type Definitions - ValidationExceptionErrors
 * @module exceptions/types/ValidationExceptionErrors
 */

/**
 * Aggregated `ValidationException` errors.
 */
export type ValidationExceptionErrors = ExceptionErrors<ValidationError>
