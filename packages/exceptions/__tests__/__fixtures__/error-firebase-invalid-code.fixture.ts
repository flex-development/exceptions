import type { FirebaseError } from '@packages/exceptions/interfaces/firebase-error.interface'
import { FirebaseAppError } from 'firebase-admin/lib/utils/error'

/**
 * @file Workspace Test Fixture - FirebaseError (With Invalid FirebaseErrorCode)
 * @module exceptions/tests/fixtures/error-firebase-invalid-code
 */

export default new FirebaseAppError(' ', 'Test message') as FirebaseError
