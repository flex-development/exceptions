# exceptions [![LICENSE](https://img.shields.io/github/license/flex-development/loadenv.svg)](LICENSE) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)

Exception data models

## Overview

[Getting Started](#getting-started)  
[Installation](#installation)  
[Usage](#usage)  
[Contributing](docs/CONTRIBUTING.md)

## Getting Started

Custom error class package designed to prevent repeating common exception data
modelling patterns found in Flex Development projects.

The base class, `Exception`, is a subclass of the standard JavaScript `Error`
object, and supports creating exceptions as well as converting [Axios][1],
[Firebase][2], and [Next.js][3] error objects to `Exception` class errors.

The `ExceptionJSON` interface, a JSON representation of `Exception`, mimics
error interfaces from [`@feathersjs/errors`][4] package, but with more
opinionated type definitions.

## Installation

```zsh
yarn add @flex-development/exceptions # or npm i @flex-development/exceptions
```

## Usage

```typescript
import { ExceptionCode } from '@flex-development/exceptions/enums'
import Exception from '@flex-development/exceptions/exceptions/base.exception'

const dto = {
  email: 'helloworld@email.com',
  password: '_securepassword'
}

const code = ExceptionCode.CONFLICT
const message = `User with email "${dto.email}" already exists`
const data = { dto, { errors: { email: dto.email } } }

const exception = new Exception(code, message, data)
const ejson = exception.toJSON()

console.error(exception.toJSON())
```

The log will contain object with the following shape:

```typescript
const ejson: ExceptionJSON = {
  name: 'CONFLICT',
  message: 'User with email "helloworld@email.com" already exists',
  code: 409,
  className: 'conflict',
  data: { dto: { email: 'helloworld@email.com', password: '_securepassword' } },
  errors: { email: 'helloworld@email.com' }
}
```

For more details, view the [Exception API documentation][5].

[1]: https://github.com/axios/axios
[2]:
  https://github.com/firebase/firebase-admin-node/blob/master/src/firebase-namespace-api.ts
[3]: https://nextjs.org/docs/advanced-features/custom-error-page
[4]: https://github.com/feathersjs/feathers/tree/dove/packages/errors
[5]: src/exceptions/base.exception.ts
[6]: https://github.com/features/packages
[7]: https://github.com/settings/tokens/new
