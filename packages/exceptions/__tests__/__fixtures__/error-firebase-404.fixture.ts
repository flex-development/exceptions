import type { FirebaseError } from '@packages/exceptions/interfaces'

/**
 * @file Workspace Test Fixture - FirebaseError (404)
 * @module exceptions/tests/fixtures/ERROR_FIREBASE_404
 */

const ERROR = new Error('Test error message') as FirebaseError
Object.assign(ERROR, { code: 'app/no-app' })

export default ERROR
