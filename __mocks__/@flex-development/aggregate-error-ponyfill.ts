/**
 * @file Mocks - @flex-development/aggregate-error-ponyfill
 * @module fixtures/flex-development/aggregate-error-ponyfill
 * @see https://github.com/flex-development/aggregate-error-ponyfill
 */

import type { Options } from '@flex-development/aggregate-error-ponyfill'
import type { Fn, ObjectPlain } from '@flex-development/tutils'

/**
 * [`@flex-development/aggregate-error-ponyfill`][1] module type.
 *
 * [1]: https://github.com/flex-development/aggregate-error-ponyfill
 */
type Actual = typeof import('@flex-development/aggregate-error-ponyfill')

/**
 * `@flex-development/aggregate-error-ponyfill` module.
 *
 * @const {Actual} actual
 */
const actual: Actual = await vi.importActual<Actual>(
  '@flex-development/aggregate-error-ponyfill'
)

/**
 * `AggregateError` factory.
 *
 * The `AggregateError` object represents an error when several errors need to
 * be wrapped in a single error.
 *
 * It is thrown when multiple errors need to be reported by an operation, for
 * example by [`Promise.any()`][1] when all promises passed to it reject.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
 *
 * @template T - Aggregated error type
 * @template Cause - Error cause type
 *
 * @param {Iterable<T>} errors - An iterable of errors
 * @param {string} [message] - Human-readable description of the error
 * @param {Options<Cause>} [options] - Error options
 * @param {Cause} [options.cause] - The original cause of the error
 * @return {Actual['default']} New `AggregateError` instance
 */
function factory<T = any, Cause = unknown>(
  this: Actual['default'],
  errors: Iterable<T>,
  message?: string,
  options?: Options<Cause>
): Actual['default'] {
  Object.assign(this, new actual.default(errors, message, options))
  return this
}

/**
 * Create `.stack` property on the given `target` object.
 *
 * @see https://nodejs.org/api/errors.html#errorcapturestacktracetargetobject-constructoropt
 *
 * @param {ObjectPlain} target - Target object
 * @param {Fn} [constructor] - Constructor function
 * @return {void} Nothing when complete
 */
const captureStackTrace = vi.fn(actual.default.captureStackTrace)

/**
 * The `AggregateError` object represents an error when several errors need to
 * be wrapped in a single error.
 *
 * @class
 * @extends {Error}
 */
const AggregateError = vi.fn(factory)

Object.assign(AggregateError, { captureStackTrace })

export default AggregateError
