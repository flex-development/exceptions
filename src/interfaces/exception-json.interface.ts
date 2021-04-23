import { ExceptionClassName, ExceptionCode } from '@/enums'
import type { ExceptionErrors, ExceptionName } from '@/types'
import type { PlainObject } from 'simplytyped'

/**
 * @file Interface - ExceptionJSON
 * @module interfaces/ExceptionJSON
 */

export interface ExceptionJSON {
  readonly className: ExceptionClassName
  readonly code: ExceptionCode
  readonly data: PlainObject
  readonly errors?: ExceptionErrors
  readonly message: string
  readonly name: ExceptionName
}
