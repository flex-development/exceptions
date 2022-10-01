/**
 * @file Interfaces - FirebaseError
 * @module exceptions/interfaces/FirebaseError
 */

import type { FirebaseError as FirebaseSdkError } from '@firebase/util'

/**
 * Object representing a Firebase error.
 *
 * @see https://github.com/firebase/firebase-admin-node
 * @see https://github.com/firebase/firebase-js-sdk
 *
 * @extends {Error}
 */
interface FirebaseError extends Error {
  /**
   * Firebase error code.
   *
   * Format: `<service>/<string-code>`
   *
   * @example
   *  'auth/invalid-uid'
   * @example
   *  'storage/invalid-emulator-host'
   */
  readonly code: string

  /**
   * Error name.
   *
   * **Note**: `FirebaseError` when using [Firebase SDKs][1], `Error` otherwise.
   *
   * [1]: https://github.com/firebase/firebase-js-sdk
   */
  readonly name: 'Error' | 'FirebaseError'

  /**
   * Object containing additional error information.
   *
   * Exclusive to [Firebase SDKs][1].
   *
   * [1]: https://github.com/firebase/firebase-js-sdk
   */
  customData?: FirebaseSdkError['customData']
}

export type { FirebaseError as default }
