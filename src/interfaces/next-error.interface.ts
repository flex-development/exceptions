import { ExceptionStatusCode } from '@/enums'

/**
 * @file Interface - NextError
 * @module interfaces/NextError
 * @see https://nextjs.org/docs/advanced-features/custom-error-page
 */

export interface NextError extends Error {
  readonly statusCode?: ExceptionStatusCode
}
