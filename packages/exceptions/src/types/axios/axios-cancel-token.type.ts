import type { AxiosCancel } from './axios-cancel.type'

/**
 * @file Type Definitions - AxiosCancelToken
 * @module exceptions/types/axios/AxiosCancelToken
 */

/**
 * Object representing a [request cancellation][1] token.
 *
 * [1]: https://github.com/axios/axios#cancellation
 */
export type AxiosCancelToken = {
  promise: Promise<AxiosCancel>
  reason?: AxiosCancel
  throwIfRequested(): void
}
