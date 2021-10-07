import type { FirebaseError } from '@packages/exceptions/interfaces/firebase-error.interface'

/**
 * @file Workspace Test Fixture - FirebaseError (With Invalid FirebaseErrorCode)
 * @module exceptions/tests/fixtures/error-firebase-invalid-code
 */

const ERROR = new Error('Test message') as FirebaseError
Object.assign(ERROR, { code: '' })

export default ERROR
