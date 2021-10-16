import type { FirebaseError } from '@packages/exceptions/interfaces'

/**
 * @file Workspace Test Fixture - FirebaseError (With Invalid FirebaseErrorCode)
 * @module exceptions/tests/fixtures/ERROR_FIREBASE_INVALID_CODE
 */

const ERROR = new Error('Test message') as FirebaseError
Object.assign(ERROR, { code: '' })

export default ERROR
