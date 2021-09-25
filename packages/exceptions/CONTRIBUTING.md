# Contributing Guide - exceptions

> **Note:** See the [Project Contributing Guide](../../CONTRIBUTING.md) for
> information about contibruting code, handling pull requests, and creating bug
> reports. Please read both guides before contributing to any workspace to
> prevent duplicated work and misunderstandings.

## Overview

[Getting Started](#getting-started)  
[Making Changes](#making-changes)

## Getting Started

### Environment Variables

| name       | required | development        | test               | production | deployment (local & ci) |
| ---------- | -------- | ------------------ | ------------------ | ---------- | ----------------------- |
| `NODE_ENV` | `false`  | :white_check_mark: | :white_check_mark: | :x:        | :white_check_mark:      |

Defaults for `development`, `test`, and `production` variables are located in
their respective `env*` file. Consult a project maintainer for required
variables not found in an environment file. Once retrieved, add them to a
`env.*.local` file.

## Making Changes

All source code can be found in the [`src`](src/) directory.
