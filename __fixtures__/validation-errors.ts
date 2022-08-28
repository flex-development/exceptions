/**
 * @file Test Fixture - ValidationError[]
 * @module fixtures/VALIDATION_ERRORS
 */

import type { ValidationError } from 'class-validator'

export default [
  {
    constraints: {
      length: '$property must be longer than or equal to 10 characters'
    },
    property: 'title',
    value: 'Hello'
  },
  {
    constraints: {
      contains: 'text must contain a hello string'
    },
    property: 'text',
    value: 'this is a great post about hell world'
  }
] as ValidationError[]
