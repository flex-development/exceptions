# exceptions

[![npm](https://img.shields.io/npm/v/@flex-development/exceptions.svg)](https://npmjs.com/package/@flex-development/exceptions)
[![codecov](https://codecov.io/gh/flex-development/exceptions/branch/main/graph/badge.svg?token=ED02ARCVXE)](https://codecov.io/gh/flex-development/exceptions)
[![module type: cjs+esm](https://img.shields.io/badge/module%20type-cjs%2Besm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/exceptions.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

Custom error classes and utilities.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
  - [Data Transfer Objects](#data-transfer-objects)
  - [Enums](#enums)
  - [Interfaces](#interfaces)
  - [Type Definitions](#type-definitions)
- [Contribute](#contribute)

## What is this?

This package exports a set of custom error classes and utilities.

## When should I use this?

**TODO**: Update documentation.

## Install

```sh
yarn add @flex-development/exceptions
```

From Git:

```sh
yarn add @flex-development/exceptions@flex-development/exceptions
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

**TODO**: usage documentation.

## API

**TODO**: api documentation.

## Types

This package is fully typed with [TypeScript][1].

### Data Transfer Objects

- [`ExceptionDTO`](src/dtos/exception.ts)
- [`HttpExceptionDTO`](src/dtos/exception-http.ts)

### Enums

- [`ClassName`](src/enums/class-name.ts)
- [`StatusName`](src/enums/status-name.ts)
- [`Status`](src/enums/status.ts)

### Interfaces

- [`ExceptionJSON`](src/interfaces/exception-json.ts)
- [`HttpExceptionJSON`](src/interfaces/exception-json-http.ts)

### Type Definitions

- [`Errors`](src/types/errors.ts)

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://www.typescriptlang.org
