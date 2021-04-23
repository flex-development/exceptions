import type { FirebaseError } from '@/interfaces/firebase-error.interface'
import { FirebaseAppError } from 'firebase-admin/lib/utils/error'

/**
 * @file Test Fixture - FirebaseError - Invalid FirebaseErrorCode
 * @module exceptions/tests/fixtures/firebase-error-404.fixture
 */

export default new FirebaseAppError(' ', 'Test message') as FirebaseError
