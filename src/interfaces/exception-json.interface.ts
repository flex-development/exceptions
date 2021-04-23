import type { ExceptionDataDTO } from '@/dto'
import { ExceptionClassName, ExceptionStatusCode } from '@/enums'
import type { ExceptionErrors, ExceptionName } from '@/types'

/**
 * @file Interface - ExceptionJSON
 * @module interfaces/ExceptionJSON
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
