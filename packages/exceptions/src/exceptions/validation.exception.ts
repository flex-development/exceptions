import { ValidationExceptionDTO } from '@packages/exceptions/dtos'
import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import { isExceptionCode } from '@packages/exceptions/guards'
import { ValidationExceptionErrors } from '@packages/exceptions/types'
import type { ValidationError } from 'class-validator'
import Exception from './base.exception'

/**
 * @file Exceptions - ValidationException
 * @module exceptions/exceptions/ValidationException
 */

/**
 * Converts groups of [validation errors][1] into an exception.
 *
 * [1]: https://github.com/typestack/class-validator#validation-errors
 *
 * @extends {Exception}
 */
export default class ValidationException extends Exception<ValidationError> {
  /**
   * @readonly
   * @property {ValidationExceptionErrors} errors - Aggregated validation errors
   */
  declare readonly errors: ValidationExceptionErrors

  /**
   * @readonly
   * @property {'ValidationException'} name - Constructor name
   */
  // @ts-expect-error '"ValidationException"' !== '"Exception"
  override readonly name: 'ValidationException' = 'ValidationException'

  /**
   * Instantiates a new `ValidationException`.
   *
   * @param {string} model - Data model name
   * @param {ValidationExceptionDTO} [dto={}] - Custom error data
   * @param {ValidationExceptionErrors} [dto.errors] - Validation error(s)
   * @param {ExceptionCode} [dto.code=422] - HTTP error response status code
   * @param {string} [dto.message] - Custom message. Overrides preset message
   * @param {string} [stack] - Error stack
   */
  constructor(
    readonly model: string,
    dto: ValidationExceptionDTO = {},
    stack?: string
  ) {
    super(
      isExceptionCode(dto.code) ? dto.code : ExceptionCode.UNPROCESSABLE_ENTITY,
      null,
      dto,
      stack
    )

    // Remove code from error data if ExceptionCode
    if (isExceptionCode(dto.code)) Reflect.deleteProperty(this.data, 'code')

    // Set message if custom message wasn't provided
    if (!dto.message) {
      let message = `${model} validation failure`

      if (this.errors.length > 0) {
        message += `: [${this.errors.map(error => error.property)}]`
      }

      Object.assign(this, { message })
    }
  }
}
