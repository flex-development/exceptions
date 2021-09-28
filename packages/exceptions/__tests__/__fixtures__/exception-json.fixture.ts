import ClassName from '@packages/exceptions/enums/exception-class-name.enum'
import ExceptionCode from '@packages/exceptions/enums/exception-code.enum'
import ExceptionId from '@packages/exceptions/enums/exception-id.enum'
import type { ExceptionJSON } from '@packages/exceptions/interfaces'

/**
 * @file Workspace Test Fixture - ExceptionJSON
 * @module exceptions/tests/fixtures/exception-json
 */

export default Object.freeze({
  className: ClassName.NOT_FOUND,
  code: ExceptionCode.NOT_FOUND,
  data: Object.freeze({
    created_at: 1_632_786_987_864,
    isExceptionJSON: true,
    query: { objectID: '4' },
    url: '/pages/4?objectID=4',
    vercel: {
      branch: 'main',
      commit: 'ed9311d847ff3cf6d5d50afa4e1b2aea967d1f0e',
      env: 'production'
    }
  }),
  errors: Object.freeze([{ objectID: '4' }]),
  message: 'Object with objectID "4" not found',
  name: ExceptionId.NOT_FOUND
}) as ExceptionJSON
