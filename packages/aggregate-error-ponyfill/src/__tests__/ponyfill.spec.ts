import TestSubject from '../ponyfill'

/**
 * @file Unit Tests - AggregateError Ponyfill
 * @module aggregate-error-ponyfill/tests/unit/ponyfill
 */

describe('aggregate-error-ponyfill/unit:ponyfill', () => {
  describe('constructor', () => {
    it('should have spec-compliant signature', () => {
      expect(typeof TestSubject).equal('function')
      expect(TestSubject.name).equal('AggregateError')
      expect(TestSubject.prototype.errors).equal(undefined)
      expect(TestSubject.prototype.message).equal('')
      expect(TestSubject.length).equal(2)
    })
  })

  describe('instance', () => {
    it('should create spec-compliant AggregateError instance', () => {
      // Arrange
      const errors = [new SyntaxError('syntax error'), { code: 400 }, 'value']
      const message = 'i am an aggregate error'

      // Act
      const error = new TestSubject(errors, message)

      // Expect
      expect(error).to.be.an.instanceof(Error)
      expect(error.errors).not.to.equal(errors)
      expect(error.errors).to.deep.equal(errors)
      expect(error.message).to.equal(message)
      expect(error.name).to.equal('AggregateError')
    })
  })

  describe('non-iterable errors', () => {
    const cases = [
      -0,
      0,
      42,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
      Number.NaN,
      false,
      null,
      undefined,
      true,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      function () {},
      {}
    ]

    cases.forEach(testcase => {
      it(`should throw TypeError given [${pf(testcase)}]`, () => {
        // Arrange
        const fn = () => new TestSubject(testcase as Iterable<any>)

        // Expect
        expect(fn).to.throw(TypeError)
      })
    })
  })
})
