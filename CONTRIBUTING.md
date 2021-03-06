# Contributing Guide

This document aims to describe the workflows and rules used for developing this
project. This includes, but is not limited to:

- how to contribute code (coding standards, testing, documenting source code)
- how pull requests are handled
- how to file bug reports

> **Note:** This general guide is referenced in every workspace-specific guide.
> Please read both guides before contributing to any workspace to prevent
> duplicated work and misunderstandings.

## Overview

[Getting Started](#getting-started)  
[Contributing Code](#contributing-code)  
[Labels](#labels)  
[Opening Issues](#opening-issues)  
[Pull Requests & Code Reviews](#pull-requests-&-code-reviews)  
[Merge Strategies](#merge-strategies)  
[Releasing](#releasing)

## Getting Started

### Terminology

People interacting with the `exceptions` project are grouped into 4 categories:

- **owner**: `flex-development` organization owners with full admin rights
- **maintainer**: owners and people added to the organization who actively
  contribute to projects and have direct push access
- **contributor**: someone who has helped improve any projects, but does not
  have direct push access
- **user**: developers who use any `flex-development` projects and may or may
  not participate in discussions regarding a given project

#### Additional Terminology

- **contribution**:
  - new features
  - fixing documentation
  - filing bug reports with reproducible steps
  - engaging in discussions for new feature requests
  - answering questions
- **ticket**: [JIRA][1] issue

### Environment

#### Environment Variables

Project environment variables are listed below. Workspace variables are listed
in each workspace-specific Contributing Guide.

| name                     | required | development        | test               | production | build, release, deploy (local & ci) |
| ------------------------ | -------- | ------------------ | ------------------ | ---------- | ----------------------------------- |
| `DEBUG`                  | `false`  | :white_check_mark: | :white_check_mark: | :x:        | :white_check_mark:                  |
| `DEBUG_COLORS`           | `false`  | :white_check_mark: | :white_check_mark: | :x:        | :white_check_mark:                  |
| `GITHUB_WORKSPACE`       | `true`   | :white_check_mark: | :white_check_mark: | :x:        | :white_check_mark:                  |
| `INIT_CWD`**\***         | `true`   | :x:                | :x:                | :x:        | :white_check_mark:                  |
| `NODE_ENV`               | `false`  | :x:                | :x:                | :x:        | :white_check_mark:                  |
| `NODE_OPTIONS`           | `true`   | :white_check_mark: | :x:                | :x:        | :white_check_mark:                  |
| `NPM_TOKEN`              | `true`   | :white_check_mark: | :white_check_mark: | :x:        | :white_check_mark:                  |
| `NPM_TOKEN_FLDV`         | `true`   | :white_check_mark: | :white_check_mark: | :x:        | :white_check_mark:                  |
| `PAT_GPR`                | `true`   | :white_check_mark: | :white_check_mark: | :x:        | :white_check_mark:                  |
| `PAT_GPR_FLDV`           | `true`   | :white_check_mark: | :white_check_mark: | :x:        | :white_check_mark:                  |
| `TS_NODE_PROJECT`        | `false`  | :white_check_mark: | :white_check_mark: | :x:        | :white_check_mark:                  |
| `npm_package_name`**\*** | `true`   | :x:                | :x:                | :x:        | :white_check_mark:                  |

**\*** Environment variable [specific to Yarn 2][2]

If you're using [ZSH][3], you can use the [`dotenv`][4] plugin to autosource the
project [`.env`](.env) file. Otherwise, follow the instructions in the
[Clone & Install](#clone--install) section to setup your environment.

##### `GITHUB_WORKSPACE`

`GITHUB_WORKSPACE` is set in our project [`.env`](.env) file, but if you'd like
to use the value in your other projects (and have one less variable to
autosource for this project) update your shell environment:

1. Open a shell startup file

   - e.g: `~/.bash_profile` `~/.bashrc`, `~/.profile`, `~/.zprofile`,
     `~/.zshenv`, `~/.zshrc`

2. Add `export GITHUB_WORKSPACE=$(git rev-parse --show-toplevel)` to your chosen
   shell startup file

3. Save file and re-launch shell

### Git Configuration

The examples in this guide contain references to custom Git aliases.

Copy the [starter Git global configuration](.github/.gitconfig) to follow along
fully, as well as begin extending your own workflow.

### Yarn

This project uses Yarn 2. The Yarn configuration for this project can be found
in [`.yarnrc.yml`](.yarnrc.yml). If you're already using Yarn globally, see the
[Yarn 2 Migration docs][5].

### GitHub Packages

Some workspaces depend on scoped packages (e.g: `@flex-development`). Some of
those packages are published to the [GitHub Package Registry][6], but **_not to
NPM_**. A [Personal Access Token with at least the `read:packages` scope][7]
attached is required for installation.

Scopes, their registry servers, and required environment variables are defined
in [`.yarnrc.yml`](.yarnrc.yml) under the `npmScopes` field.

### Clone & Install

```zsh
git clone https://github.com/flex-development/exceptions
cd exceptions && source .env
yarn
```

Note that if you have a global Yarn configuration (or any `YARN_*` environment
variables set), an error will be displayed in the terminal if any settings
conflict with the project's Yarn configuration, or the Yarn 2 API. An error will
also be displayed if you're missing any environment variables.

## Contributing Code

[Husky][8] is used to run Git hooks that locally enforce coding and commit
message standards, as well run tests associated with any files changed since the
last commit.

Any code merged into the [development and production branches](#branching-model)
must confront the following criteria:

- changes should be discussed prior to implementation
- changes have been tested properly
- changes should include documentation updates if applicable
- changes have an associated ticket and pull request

### Branching Model

- Development: `next`
- Production: `main`

### Branch Prefixes

When creating a new branch, the name should match the following format:

```zsh
[prefix]/<TICKET-ID>-<branch_name>
 ???           ???      ???
 ???           ???      ????????? a short, memorable name (possibly the future PR title)
 ???           ???
 ???           ????????? check jira issue
 ???
 ????????? bugfix|feat|hotfix|release
```

For example:

```zsh
git chbf PROJ-4-authentication
```

will create a new branch titled `feat/PROJ-4-authentication`.

### Commit Messages

This project follows [Conventional Commit][9] standards and uses
[commitlint][10] to enforce those standards.

This means every commit must conform to the following format:

```zsh
<type>[optional scope]: <description>
 ???     ???                ???
 ???     ???                ????????? summary in present tense; lowercase without period at the end
 ???     ???
 ???     ????????? see commitlint.config.js
 ???
 ????????? build|ci|chore|docs|feat|fix|perf|refactor|revert|style|test|wip

[optional body]

[optional footer(s)]
```

`<type>` must be one of the following values:

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

e.g:

- `git docs 'update contributing guide'` -> `docs: update contributing guide`
- `git ac 'refactor(api)!: user queries'` -> `refactor(api)!: user queries`

See [`.commitlintrc.ts`](.commitlintrc.ts) for an exhasutive list of valid
commit scopes and types.

### Code Style

[Prettier][11] is used to format code, and [ESLint][12] to lint files.

**Prettier Configuration**

- [`.prettierrc.js`](.prettierrc.js)
- [`.prettierignore`](.prettierignore)

**ESLint Configuration**

- [`.eslintrc.js`](.eslintrc.js)
- [`.eslintignore`](.eslintignore)

### Making Changes

Source code is located in [`packages/*/src`](packages).

The purpose of each file should be documented using the `@file` annotation,
along with an accompanying `@module` annotation. A guide to workspace-specific
changes can be found in the each workspace's Contributing Guide.

### Documentation

- JavaScript & TypeScript: [JSDoc][13], linted with [`eslint-plugin-jsdoc`][14]

Before making a pull request, be sure your code is well documented, as it will
be part of your code review.

### Testing

This project uses [Mocha][15] x [Chai][16] testing workflow.

- run project-level test suites: `yarn test`
- run workspace-level test suites: `yarn test:<package.json#name-no-scope>`

Husky is configured to run tests before every push. If you need to create a new
issue regarding a test, or need to make a `wip` commit, use Mocha's [inclusive
tests feature][17] to mark your tests or suites as pending.

### Getting Help

If you need help, make note of any issues in their respective files. Whenever
possible, create a test to reproduce the error. Make sure to label your issue as
`type:question` and `status:help-wanted`.

## Labels

This project uses a well-defined list of labels to organize tickets and pull
requests. Most labels are grouped into different categories (identified by the
prefix, eg: `status:`).

A list of labels can be found in [`.github/labels.yml`](.github/labels.yml).

## Opening Issues

Before opening an issue please make sure, you have:

- read the documentation
- searched open issues for an existing issue with the same topic
- search closed issues for a solution or feedback

If you haven't found a related open issue, or feel that a closed issue should be
re-visited, please open a new issue. A well-written issue has the following
traits:

- follows an [issue template](.github/ISSUE_TEMPLATE)
- is [labeled](#labels) appropriately
- contains a well-written summary of the feature, bug, or problem statement
- contains a minimal, inlined code example (if applicable)
- includes links to prior discussion if you've found any

## Pull Requests & Code Reviews

When you're ready to have your changes reviewed, open a pull request against the
`next` branch.

Every opened PR should:

- use [**this template**](.github/PULL_REQUEST_TEMPLATE.md)
- reference it's ticket id
- be [labeled](#labels) appropriately
- be assigned to yourself
- give maintainers push access so quick fixes can be pushed to your branch

### Pull Request URL Format

```zsh
https://github.com/flex-development/exceptions/compare/next...<branch>
```

where `<branch>` is the name of the branch you'd like to merge into `next`.

### Code Reviews

All pull requests are subject to code reviews before being merged into `next`
and `main`. During code reviews, code-style and documentation will be reviewed.

If any changes are requested, those changes will need to be implemented and
approved before the pull request is merged.

## Merge Strategies

In every repository, the `create a merge commit` and `squash and merge` options
are enabled.

- if a PR has a single commit, or the changes across commits are logically
  grouped, use `squash and merge`
- if a PR has multiple commits, not logically grouped, `create a merge commit`

When merging, please make sure to use the following commit message format:

```txt
<type>[optional scope]: <pull-request-title> (#pull-request-n)
 ???     ???                ???
 ???     ???                ????????? check your pull request
 ???     ???
 ???     ????????? see commitlint.config.js
 ???
 ????????? build|ci|chore|docs|feat|fix|merge|perf|refactor|release|revert|style|test
```

e.g:

- `refactor(api): github oauth flow #52`
- `merge: update contributing guides and tsconfigs #39`
- `perf(web): decrease page loading time #26`
- `release: @flex-development/exceptions@1.0.0 #13`

## Releasing

This repository is configured to publish packages and releases when a
`release/*` branch is merged.

> Note: Publishing is executed via the
> [Continuous Deployment](./.github/workflows/continous-deployment.yml)
> workflow. This is so invalid or malicious versions cannot be release without
> merging those changes into `next` first.

Before releasing, the following steps must be completed:

1. Schedule a code freeze
2. Create a new `release/*` branch
   - where `*` is `<package.json#name-no-scope>@<package.json#version>`
     - e.g: `exceptions@1.1.0`
   - branch naming conventions **must be followed exactly**. the branch name is
     used to create distribution tags, locate drafted releases, and generate the
     correct workspace publish command
3. Decide what version bump the release needs (major, minor, patch)
   - versioning
     - `yarn release:exceptions` (determines [bumps based on commits][18])
     - `yarn release:exceptions --first-release`
     - `yarn release:exceptions --release-as major`
     - `yarn release:exceptions --release-as minor`
     - `yarn release:exceptions --release-as patch`
   - a new release will be drafted
4. Open a new pull request from `release/*` into `next`
   - title the PR `release: <package.json#name>@<package.json#version>`
     - e.g: `release: @flex-development/exceptions@1.1.0`
   - link all issues being released
   - after review, `squash and merge` the PR:
     `release: @flex-development/exceptions@1.1.0 (#pull-request-n)`
     - e.g: `release: @flex-development/exceptions@1.1.0 (#3)`
   - once the PR is merged, the deployment workflow will be triggered
   - the maintainer who approved the PR should check to make sure the workflow
     completes all jobs as expected. if successful, the workflow will:
     - publish package to the [GitHub Package Registry][18] and
     - update the production branch (merge branch `next` into `main`)
     - publish the drafted release
   - the maintainer who approved the PR should go through the PR's linked issues
     and:
     - make sure all issues are closed and have the label `status:merged`
     - add the `status:released` label to all issues

[1]: https://www.atlassian.com/software/jira
[2]: https://yarnpkg.com/advanced/lifecycle-scripts#environment-variables
[3]: https://github.com/ohmyzsh/ohmyzsh
[4]: https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dotenv
[5]: https://yarnpkg.com/getting-started/migration
[6]: https://github.com/features/packages
[7]:
  https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries
[8]: https://github.com/typicode/husky
[9]: https://www.conventionalcommits.org
[10]: https://github.com/conventional-changelog/commitlint
[11]: https://prettier.io
[12]: https://eslint.org
[13]: https://jsdoc.app
[14]: https://github.com/gajus/eslint-plugin-jsdoc
[15]: https://mochajs.org
[16]: https://www.chaijs.com
[17]: https://mochajs.org/#inclusive-tests
[18]: https://www.conventionalcommits.org/en/v1.0.0
[19]: https://github.com/features/packages
