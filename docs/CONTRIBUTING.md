# Contributing

These instructions will help you begin making changes on your local machine, as
well follow our coding guidelines.

## Overview

[Getting Started](#getting-started)  
[Coding Standards](#coding-standards)  
[Making Changes](#making-changes)  
[Testing](#testing)  
[Documentation](#documentation)  
[Getting Help](#getting-help)  
[Creating a Pull Request](#creating-a-pull-request)

## Getting Started

### Git Configuration

Copy the [starter Git global configuration](.gitconfig) to stay inline with our
coding guidelines, as well as begin extending your own workflow.

**Note**: The examples below will uses aliases from the starter config.

### Development Environment

1. Copy the snippet below to clone the project onto your local machine:

   ```zsh
   git clone https://github.com/flex-development/exceptions.git; cd exceptions
   yarn # or npm install
   ```

### Environment Variables

All required environment variables are documented in the `package.json` of each
project, under the `required-env` field.

## Coding Standards

[Husky][1] is used to enforce coding and commit message standards.

## Branch Naming Conventions

When creating a new branch, the name should match the following format:
**`feat/`**, **`hotfix/`**, **`release/`**, or **`support/`** followed by
**`<branch_name>`**.

For example:

```zsh
  git feat repo-setup
```

will create a new branch titled `feat/repo-setup` and push it to `origin`.

### Commit Messages

This project follows [Conventional Commits][2] standards.

Commit messages should be one of the following types:

- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Changes that don't impact external users
- `docs`: Documentation only changes
- `feat`: New features
- `fix`: Bug fixes
- `perf`: Performance improvements
- `refactor`: Code improvements
- `revert`: Revert past changes
- `style`: Changes that do not affect the meaning of the code
- `test`: Adding missing tests or correcting existing tests
- `wip`: Working on changes, but you need to go to bed :wink:

For example:

```zsh
  git chore "add eslint configuration"
```

will produce the following commit: `chore: add eslint configuration`

[commitlint][3] is used to enforce commit guidlelines.

To review our commitlint rules, see the configuration file:

- [`commitlint.config.js`](../commitlint.config.js)

### Formatting & Linting

#### Formatting

This project uses [Prettier][4] to format all code.

To review our formatting guidelines, see our configuration files:

- Configuration:[`.prettierrc.js`](../.prettierrc.js)
- Ignore Patterns: [`.prettierignore`](../.prettierignore)

#### Linting

This project uses [ESLint][5] to lint JavaScript and TypeScript files.

To review our linting guidelines, see our configuration files:

- Configuration: [`.eslintrc.js`](../.eslintrc.js)
- Ignore Patterns: [`.eslintignore`](../.eslintignore)

## Making Changes

All source code can be found in the `src` directory.

### [Data Transfer Objects][6]

Data transfer objects (DTOs) carry data between two separate systems.

- Directory: `src/dto`

### [Enums][7]

Named constants.

- Directory: `src/enums`

### Exceptions

Custom error classes.

`Exception`, the base class, supports creating exceptions as well as converting
Axios, Firebase, and Next.js error objects to `Exception` class errors.

- Directory: `src/exceptions`
- Exception API: [`src/exceptions/base.exception.ts`][8]

### [Interfaces][9]

Error object types defined by this package.

- Directory: `src/interfaces`

### [Types][10]

Utility type definitions.

- File: `src/types.ts`

## Documentation

- JavaScript & TypeScript: [JSDoc][11], linted with [`eslint-plugin-jsdoc`][12]

Before making a pull request, be sure your code is well documented, as it will
be part of your code review.

## Testing

This project uses [Jest][13] as its test runner. To run the tests in this
project, run `yarn test` from the project root.

Husky is configured to run tests before every push. If a bug report concerning a
failed test is needed, use the command `git pnv` to push your code without
running the Husky `pre-push` hook.

## Getting Help

If you need help, make note of any issues in their respective files. Whenever
possible, create a test to reproduce the error. Make sure to label your issue as
`discussion`, `help wanted`, and/or `question`.

## Creating a Pull Request

When you're ready to have your changes reviewed, make sure your code is
[well documented](#documentation). The `pre-commit` and `pre-push` hooks will
test your changes against our coding guidelines, as well run all test suites.

### Submit for Review

- Use [**this template**](./pull_request_template.md)
- Label your pull request appropriately
- Assign the task to yourself and the appropriate reviewer

[1]: https://github.com/typicode/husky
[2]: https://www.conventionalcommits.org/
[3]: https://github.com/conventional-changelog/commitlint
[4]: https://prettier.io/
[5]: https://eslint.org/
[6]:
  https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/#Data-Transfer-Objects
[7]: https://www.typescriptlang.org/docs/handbook/enums.html
[8]: ../src/exceptions/base.exception.ts
[9]: https://www.typescriptlang.org/docs/handbook/2/objects.html
[10]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
[11]: https://jsdoc.app
[12]: https://github.com/gajus/eslint-plugin-jsdoc
[13]: https://jestjs.io/
