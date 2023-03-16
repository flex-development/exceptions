/**
 * @file Functional Tests - Exception
 * @module exceptions/exceptions/tests/functional/Exception
 */

import AggregateError from '@flex-development/aggregate-error-ponyfill'
import TestSubject from '../base.exception'

vi.mock('@flex-development/aggregate-error-ponyfill')

describe('functional:exceptions/Exception', () => {
  it('should extend AggregateError', () => {
    // Act
    new TestSubject()

    // Expect
    expect(AggregateError).toHaveBeenCalledOnce()
    expect(AggregateError).toHaveBeenCalledWith([], 'Unknown error', {
      cause: { code: null }
    })
  })
})
