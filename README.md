# Flexceptions

Custom error handling

[![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Overview

[Getting Started](#getting-started)  
[Installation](#installation)  
[Usage](#usage)  
[Contributing](docs/CONTRIBUTING.md)

## Getting Started

Flexceptions is a custom error handling package implemented to prevent repeating
common error handling patterns in Flex Development projects.

The base class, `Exception`, is a subclass of the standard JavaScript `Error`
object, and supports creating exceptions as well as converting [Axios][1],
[Firebase][2], and [Next.js][3] error objects to `Exception` class errors.

The `ExceptionJSON` interface, a JSON representation of `Exception`, mimics
error interfaces from [`@feathersjs/errors`][4] package, but with more
opinionated type definitions.

## Installation

1. Create or edit an `.npmrc` file with the following information:

   ```utf-8
   @flex-development:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken=${GH_PAT}
   ```

   where `GH_PAT` is your [GitHub personal access token][5] with
   [`read:packages`][6] scope permissions.

2. Add project to `dependencies`

   ```zsh
   yarn add @flex-development/exceptions # or npm i @flex-development/exceptions
   ```

## Usage

```typescript
import { Exception, ExceptionStatusCode } from '@flex-development/exceptions'

const dto = {
  email: 'helloworld@email.com',
  password: '_securepassword'
}

const code = ExceptionStatusCode.CONFLICT
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

For more details, view the [Exception API documentation][7].

[1]: https://github.com/axios/axios
[2]:
  https://github.com/firebase/firebase-admin-node/blob/master/src/firebase-namespace-api.ts
[3]: https://nextjs.org/docs/advanced-features/custom-error-page
[4]: https://github.com/feathersjs/feathers/tree/dove/packages/errors
[5]:
  https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
[6]:
  https://docs.github.com/en/developers/apps/scopes-for-oauth-apps#available-scopes
[7]: ./src/exceptions/base.exception.ts
