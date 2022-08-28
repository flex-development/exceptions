/**
 * @file Test Fixture - FirebaseError (404)
 * @module fixtures/ERROR_FIREBASE_404
 */

import type { FirebaseError } from 'src/interfaces'

const ERROR = new Error('Test Firebase error message with valid code')
Object.assign(ERROR, { code: 'app/no-app' })

export default ERROR as FirebaseError
