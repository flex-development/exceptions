/**
 * @file Interfaces - NextError
 * @module exceptions/interfaces/NextError
 */

import type ExceptionCode from 'src/enums/exception-code'

/**
 * Error object thrown by [Next.js][1].
 *
 * [1]: https://nextjs.org/docs/advanced-features/custom-error-page
 *
 * @extends {Error}
 */
export interface NextError extends Error {
  readonly statusCode?: ExceptionCode
}
