/**
 * @file Type Definitions - ValidationExceptionErrors
 * @module exceptions/types/ValidationExceptionErrors
 */

import type { ValidationError } from 'class-validator'
import type { ExceptionErrors } from './exception-errors'

/**
 * Aggregated `ValidationException` errors.
 */
export type ValidationExceptionErrors = ExceptionErrors<ValidationError>
