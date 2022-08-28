/**
 * @file Exceptions - ValidationException
 * @module exceptions/exceptions/ValidationException
 */

import type { ValidationError } from 'class-validator'
import type { ValidationExceptionDTO } from 'src/dtos'
import ExceptionCode from 'src/enums/exception-code.enum'
import { isExceptionCode } from 'src/guards'
import type { ValidationExceptionErrors } from 'src/types'
import Exception from './base.exception'

/**
 * Converts groups of [validation errors][1] into an exception.
 *
 * [1]: https://github.com/typestack/class-validator#validation-errors
 *
 * @extends {Exception}
 */
export default class ValidationException extends Exception<ValidationError> {
  /**
   * @public
   * @readonly
   * @member {ValidationExceptionErrors} errors - Aggregated validation errors
   */
  public declare readonly errors: ValidationExceptionErrors

  /**
   * @public
   * @readonly
   * @member {string} model - Data model name
   */
  public readonly model: 'ValidationException' = 'ValidationException'

  /**
   * @public
   * @override
   * @readonly
   * @member {'ValidationException'} name - `Exception` subclass name
   */
  // @ts-expect-error ts(2416)
  public override readonly name: 'ValidationException' = 'ValidationException'

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
  constructor(model: string, dto: ValidationExceptionDTO = {}, stack?: string) {
    super(
      isExceptionCode(dto.code) ? dto.code : ExceptionCode.UNPROCESSABLE_ENTITY,
      null,
      dto,
      stack
    )

    // assign data model name
    Object.assign(this, { model })

    // remove code from error data if ExceptionCode
    if (isExceptionCode(dto.code)) Reflect.deleteProperty(this.data, 'code')

    // set message if custom message wasn't provided
    if (!dto.message) {
      let message = `${model} validation failure`

      if (this.errors.length > 0) {
        message += `: [${this.errors.map(error => error.property)}]`
      }

      Object.assign(this, { message })
    }
  }
}
