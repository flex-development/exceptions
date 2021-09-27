import { ExceptionClassName } from '@packages/exceptions/enums/exception-class-name.enum'
import { ExceptionStatusCode } from '@packages/exceptions/enums/exception-status-code.enum'
import type {
  ExceptionData,
  ExceptionErrors,
  ExceptionName
} from '@packages/exceptions/types'

/**
 * @file Interface - ExceptionJSON
 * @module exceptions/interfaces/ExceptionJSON
 */

/**
 * JSON representation of an `Exception`.
 *
 * @template T - Error type
 */
export interface ExceptionJSON<T extends any = any> {
  readonly className: ExceptionClassName
  readonly code: ExceptionStatusCode
  readonly message: string
  readonly name: ExceptionName

  data: ExceptionData
  errors: ExceptionErrors<T>
}
