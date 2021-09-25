import type { FirebaseError } from '@packages/exceptions/interfaces/firebase-error.interface'
import { FirebaseAppError } from 'firebase-admin/lib/utils/error'

/**
 * @file Test Fixture - FirebaseError - 404
 * @module exceptions/tests/fixtures/firebase-error-404.fixture
 */

export default new FirebaseAppError(
  'no-app',
  'Test error message'
) as FirebaseError
