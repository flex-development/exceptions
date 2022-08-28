/**
 * @file Interfaces - FirebaseError
 * @module exceptions/interfaces/FirebaseError
 */

import type { FirebaseError as ErrorS } from '@firebase/util'
import type { FirebaseError as ErrorA } from 'firebase-admin/lib/utils/error'

/**
 * Error objects thrown by [firebase-admin][1] and [Firebase SDKs][2].
 *
 * [1]: https://github.com/firebase/firebase-admin-node
 * [2]: https://github.com/firebase/firebase-js-sdk
 *
 * @extends {Error}
 */
export interface FirebaseError extends Error {
  /**
   * Firebase error code.
   */
  readonly code: string

  /**
   * Object containing error definition. Exclusive to [firebase-admin][1].
   *
   * [1]: https://github.com/firebase/firebase-admin-node
   */
  readonly errorInfo?: ErrorA['errorInfo']

  /**
   * Error name.
   *
   * When using [Firebase SDKs][1], the name will be 'FirebaseError'. Otherwise,
   * the name will be 'Error'.
   *
   * [1]: https://github.com/firebase/firebase-js-sdk
   */
  readonly name: 'Error' | 'FirebaseError'

  /**
   * Object containing additional error information. Exclusive to [SDKs][1].
   *
   * [1]: https://github.com/firebase/firebase-js-sdk
   */
  customData?: ErrorS['customData']

  /**
   * Function that returns error definition. Exclusive to [firebase-admin][1].
   *
   * [1]: https://github.com/firebase/firebase-admin-node
   */
  toJSON?(): { code: FirebaseError['code']; message: FirebaseError['message'] }
}
