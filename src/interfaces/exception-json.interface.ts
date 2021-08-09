import type { ExceptionDataDTO } from '@/dto'
import { ExceptionClassName } from '@/enums/exception-class-name.enum'
import { ExceptionStatusCode } from '@/enums/exception-status-code.enum'
import type { ExceptionErrors, ExceptionName } from '@/types'

/**
 * @file Interface - ExceptionJSON
 * @module exceptions/interfaces/ExceptionJSON
 */

/**
 * JSON representation of an `Exception`.
 */
export interface ExceptionJSON {
  readonly className: ExceptionClassName
  readonly code: ExceptionStatusCode
  readonly message: string
  readonly name: ExceptionName

  data: Omit<ExceptionDataDTO, 'errors'>
  errors: ExceptionErrors
}
