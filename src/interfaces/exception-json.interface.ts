/**
 * @file Interfaces - ExceptionJSON
 * @module exceptions/interfaces/ExceptionJSON
 */

import type ExceptionClassName from 'src/enums/exception-class-name.enum'
import type ExceptionCode from 'src/enums/exception-code.enum'
import type ExceptionId from 'src/enums/exception-id.enum'
import type { ExceptionData, ExceptionErrors } from 'src/types'

/**
 * JSON representation of an `Exception`.
 *
 * @template T - Aggergated error type(s)
 */
export interface ExceptionJSON<T = any> {
  readonly className: ExceptionClassName
  readonly code: ExceptionCode
  readonly data: Readonly<ExceptionData & { isExceptionJSON: true }>
  readonly errors: Readonly<ExceptionErrors<T>>
  readonly message: string
  readonly name: ExceptionId
}
