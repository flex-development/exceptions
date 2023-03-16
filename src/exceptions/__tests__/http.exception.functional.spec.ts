/**
 * @file Functional Tests - HttpException
 * @module exceptions/exceptions/tests/functional/HttpException
 */

import Exception from '../base.exception'
import TestSubject from '../http.exception'

vi.mock('../base.exception', () => ({ default: vi.fn() }))

describe('functional:exceptions/HttpException', () => {
  it('should extend Exception', () => {
    // Act
    new TestSubject()

    // Expect
    expect(Exception).toHaveBeenCalledOnce()
    expect(Exception).toHaveBeenCalledWith('Unknown error', {})
  })
})
