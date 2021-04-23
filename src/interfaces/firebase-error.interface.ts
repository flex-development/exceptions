/**
 * @file Interface - FirebaseError
 * @module interfaces/FirebaseError
 */

/**
 * `FirebaseError` is a subclass of the standard JavaScript `Error` object.
 *
 * - https://github.com/firebase/firebase-js-sdk/blob/master/packages/firebase
 */
export interface FirebaseError extends Error {
  /**
   * String using the following format: `service/string-code`.
   *
   * While the message for a given error can change, the code will remain the
   * same between backward-compatible versions of the Firebase SDK.
   */
  readonly code: string
}
