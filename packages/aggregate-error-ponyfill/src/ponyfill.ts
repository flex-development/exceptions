import AdvanceStringIndex from 'es-abstract/2021/AdvanceStringIndex'
import CreatePropertyOrThrow from 'es-abstract/2021/CreateDataPropertyOrThrow'
import GetMethod from 'es-abstract/2021/GetMethod'
import IsArray from 'es-abstract/2021/IsArray'
import IterableToList from 'es-abstract/2021/IterableToList'
import Type from 'es-abstract/2021/Type'
import getIteratorMethod from 'es-abstract/helpers/getIteratorMethod'

/**
 * @file AggregateError - Ponyfill
 * @module aggregate-error-ponyfill/ponyfill
 */

/**
 * The `AggregateError` object represents an error when several errors need to
 * be wrapped in a single error. It is thrown when multiple errors need to be
 * reported by an operation, for example by [`Promise.any()`][1], when all
 * promises passed to it reject.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
 *
 * @see https://tc39.es/proposal-promise-any#sec-aggregate-error-objects
 *
 * @template T - Error type
 *
 * @extends {Error}
 */
class AggregateError<T = any> extends Error {
  /**
   * @readonly
   * @property {'AggregateError'} name - Constructor name
   */
  override readonly name: 'AggregateError' = 'AggregateError'

  /**
   * @property {T[]} errors - Aggregated errors
   */
  errors: T[]

  /**
   * The `AggregateError()` constructor creates an error for several `errors`
   * that need to be wrapped in a single error.
   *
   * @example
   *  new AggregateError([new Error('some error')])
   *  new AggregateError([new Error('some error')], 'oh no!')
   *
   * @param {Iterable<T>} errors - An iterable of errors
   * @param {string} [message] - Human-readable description of the error
   */
  constructor(errors: Iterable<T>, message?: string) {
    super(message)

    // Get iterator options
    const es = { AdvanceStringIndex, GetMethod, IsArray, Type }

    // Create iterator
    const iterator = getIteratorMethod<Iterable<T>>(es, errors)

    // Add `errors` property or throw if `errors` isn't an iterable object
    CreatePropertyOrThrow(this, 'errors', IterableToList(errors, iterator))
  }
}

export default AggregateError
