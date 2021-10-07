import type { FirebaseError } from '@packages/exceptions/interfaces/firebase-error.interface'

/**
 * @file Workspace Test Fixture - FirebaseError (404)
 * @module exceptions/tests/fixtures/error-firebase-404
 */

const ERROR = new Error('Test error message') as FirebaseError
Object.assign(ERROR, { code: 'app/no-app' })

export default ERROR
