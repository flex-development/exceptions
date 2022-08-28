/**
 * @file Test Fixture - FirebaseError (With Invalid FirebaseErrorCode)
 * @module fixtures/ERROR_FIREBASE_INVALID_CODE
 */

import type { FirebaseError } from 'src/interfaces'

const ERROR = new Error('Test Firebase error with invalid code')
Object.assign(ERROR, { code: '' })

export default ERROR as FirebaseError
