# exceptions

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/@flex-development/exceptions.svg)](https://npmjs.com/package/@flex-development/exceptions)
[![license](https://img.shields.io/github/license/flex-development/exceptions.svg)](LICENSE.md)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)

> **Custom error classes.**
> \
> \
> The base class, `Exception`, extends [`AggregateError`][1]. In addition to
> creating exceptions, it can also convert [Axios][2], [Firebase][3], and
> [Next.js][4] error objects to `Exception` class errors.
> \
> \
> The `ExceptionJSON` interface, a JSON representation of `Exception`, parallels
> error interfaces defined in [`@feathersjs/errors`][5], but has more
> opinionated type definitions.

## Install

```sh
yarn add @flex-development/exceptions
```

### GitHub Package Registry

To install from the GitHub Package Registry, setup a `.npmrc` or `.yarnrc.yml`
file to authenticate with the registry.

A [Personal Access Token with the `read:packages` scope][6] is required.

#### `.npmrc`

```utf-8
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@flex-development:registry=https://npm.pkg.github.com/
```

#### `.yarnrc.yml`

```yaml
npmRegistries:
  //npm.pkg.github.com:
    npmAlwaysAuth: true
    npmAuthToken: ${GITHUB_TOKEN}

npmScopes:
  flex-development:
    npmRegistryServer: https://npm.pkg.github.com
```

### Git

See [npm-install][7] or [Git - Protocols | Yarn][8] for details on requesting a
specific branch, commit, or tag.

#### NPM

```sh
npm i flex-development/exceptions
```

#### Yarn

```sh
yarn add @flex-development/exceptions@flex-development/exceptions
```

## Usage

```typescript
import { Exception, ExceptionCode } from '@flex-development/exceptions'

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

The log will contain an object with the following shape:

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

## Built With

- [`@flex-development/aggregate-error-ponyfill`][9]
- [`@flex-development/tutils`][10]
- [`radash`][11]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
[2]: https://github.com/axios/axios
[3]:
    https://github.com/firebase/firebase-admin-node/blob/master/src/firebase-namespace-api.ts
[4]: https://nextjs.org/docs/advanced-features/custom-error-page
[5]: https://github.com/feathersjs/feathers/tree/dove/packages/errors
[6]:
    https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries
[7]: https://docs.npmjs.com/cli/v8/commands/npm-install#description
[8]: https://yarnpkg.com/features/protocols#git
[9]: https://github.com/flex-development/aggregate-error-ponyfill
[10]: https://github.com/flex-development/tutils
[11]: https://github.com/rayepps/radash
