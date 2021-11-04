# aggregate-error-ponyfill [![LICENSE](https://img.shields.io/github/license/flex-development/loadenv.svg)](LICENSE) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)

ES Proposal spec-compliant [ponyfill][1] for [`AggregateError`][2]

> The `AggregateError` object represents an error when several errors need to be
> wrapped in a single error. It is thrown when multiple errors need to be
> reported by an operation, for example by [`Promise.any()`][3], when all
> promises passed to it reject.

## Overview

[Getting Started](#getting-started)  
[Installation](#installation)  
[Usage](#usage)  
[API](#api)  
[ES Proposal Spec][4]  
[Contributing](docs/CONTRIBUTING.md)

## Installation

```zsh
yarn add @flex-development/aggregate-error-ponyfill # or npm i @flex-development/aggregate-error-ponyfill
```

## Usage

```typescript
import AggregateError from '@flex-development/aggregate-error-ponyfill'

try {
  throw new AggregateError([new Error('some error')], 'Hello')
} catch (error) {
  console.error(error instanceof AggregateError) // true
  console.error(error.message) // "Hello"
  console.error(error.name) // "AggregateError"
  console.error(error.errors) // [ Error: "some error" ]
}
```

### Native

If available, you can use the native `AggregateError` instead of the ponyfill:

```typescript
import { AggregateError } from '@flex-development/aggregate-error-ponyfill'
```

or

```typescript
import AggregateError from '@flex-development/aggregate-error-ponyfill/native'
```

Beware of [ponyfill caveats][5] when using the native implementation.

## API

### AggregateError(errors[, message])

See [`AggregateError`][2] docs for more details.

Consult the [ponyfill source code][6] for TypeScript-centric documentation.

[1]: https://github.com/sindresorhus/ponyfill
[2]:
  https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
[3]:
  https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
[4]: https://tc39.es/proposal-promise-any#sec-aggregate-error-objects
[5]:
  https://github.com/sindresorhus/ponyfill#user-content-ponyfill:~:text=Ponyfills%20should%20never%20use%20the%20native,between%20environments%2C%20which%20can%20cause%20bugs.
[6]: src/ponyfill.ts
