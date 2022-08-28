# exceptions

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/@flex-development/exceptions.svg)](https://npmjs.com/package/@flex-development/exceptions)
[![license](https://img.shields.io/github/license/flex-development/exceptions.svg)](LICENSE.md)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)

> **Custom error classes.**
> \
> \
> The base class, `Exception`, is a subclass of the standard JavaScript `Error`
> object. In addition to creating exceptions, it can also convert [Axios][1],
> [Firebase][2], and [Next.js][3] error objects to `Exception` class errors.
> \
> \
> The `ExceptionJSON` interface, a JSON representation of `Exception`, parallels
> error interfaces defined in [`@feathersjs/errors`][4], but has more
> opinionated type definitions.

## Install

```sh
yarn add @flex-development/exceptions
```

### GitHub Package Registry

To install from the GitHub Package Registry, setup a `.npmrc` or `.yarnrc.yml`
file to authenticate with the registry.

A [Personal Access Token with the `read:packages` scope][5] is required.

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

See [npm-install][6] or [Git - Protocols | Yarn][7] for details on requesting a
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

[1]: https://github.com/axios/axios
[2]:
    https://github.com/firebase/firebase-admin-node/blob/master/src/firebase-namespace-api.ts
[3]: https://nextjs.org/docs/advanced-features/custom-error-page
[4]: https://github.com/feathersjs/feathers/tree/dove/packages/errors
[5]:
    https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries
[6]: https://docs.npmjs.com/cli/v8/commands/npm-install#description
[7]: https://yarnpkg.com/features/protocols#git
