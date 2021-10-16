import ClassName from '@packages/exceptions/enums/exception-class-name.enum'
import Code from '@packages/exceptions/enums/exception-code.enum'
import ExceptionId from '@packages/exceptions/enums/exception-id.enum'
import type { ExceptionData, ExceptionErrors } from '@packages/exceptions/types'

/**
 * @file Interface - ExceptionJSON
 * @module exceptions/interfaces/ExceptionJSON
 */

/**
 * JSON representation of an `Exception`.
 *
 * @template T - Error type
 */
export interface ExceptionJSON<T = any> {
  readonly className: ClassName
  readonly code: Code
  readonly data: Readonly<ExceptionData & { isExceptionJSON: true }>
  readonly errors: Readonly<ExceptionErrors<T>>
  readonly message: string
  readonly name: ExceptionId
}
