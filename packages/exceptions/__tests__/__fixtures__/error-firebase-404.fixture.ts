import type { FirebaseError } from '@packages/exceptions/interfaces/firebase-error.interface'
import { FirebaseAppError } from 'firebase-admin/lib/utils/error'

/**
 * @file Workspace Test Fixture - FirebaseError (404)
 * @module exceptions/tests/fixtures/error-firebase-404
 */

export default new FirebaseAppError(
  'no-app',
  'Test error message'
) as FirebaseError
