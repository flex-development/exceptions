# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [7.0.0](https://github.com/flex-development/exceptions/compare/exceptions@6.0.1...exceptions@7.0.0) (2021-11-03)


### ⚠ BREAKING CHANGES

* **typescript:** drop `EmptyString`

### :hammer: Build

* **deps:** use `@flex-development/tutils@4.2.3` ([52c1630](https://github.com/flex-development/exceptions/commit/52c1630e05b583de090b7ed91855aa6483ec151b))


### :recycle: Code Improvements

* **typescript:** drop `EmptyString` ([3a53a6f](https://github.com/flex-development/exceptions/commit/3a53a6f3c2efd58ee7b1a72f94b15f43d288e3a6))


### :pencil2: Housekeeping

* **tools:** reorganize build workflow ([8749385](https://github.com/flex-development/exceptions/commit/8749385518d2acb0b0d3537ccdc076d922540205))
* **typescript:** fix `axios/lib/core/createError` typings ([7452efd](https://github.com/flex-development/exceptions/commit/7452efd0b4146018761bb277a6b4c756a13d9eeb))


### :bug: Fixes

* **exceptions:** provide `AggregateError` polyfill ([c682683](https://github.com/flex-development/exceptions/commit/c682683e579bb6b1de1fa58ef1e9b1f60fe2c307))
* package exports ([3c07221](https://github.com/flex-development/exceptions/commit/3c07221b381aef7875df9bf0d194f3f6e8b3f02d))

### [6.0.1](https://github.com/flex-development/exceptions/compare/exceptions@6.0.0...exceptions@6.0.1) (2021-10-16)


### :hammer: Build

* **deps-dev:** cleanup dependencies ([bad88ef](https://github.com/flex-development/exceptions/commit/bad88ef820b99f3cdbdb157665e50175cd1b92d3))


### :bug: Fixes

* `@flex-development/tutils` path remapping ([e743e40](https://github.com/flex-development/exceptions/commit/e743e40e67eeef2a15c9dbaf8a42eadb055495b2))

## [6.0.0](https://github.com/flex-development/exceptions/compare/exceptions@5.0.0...exceptions@6.0.0) (2021-10-16)


### ⚠ BREAKING CHANGES

* **guards:** move type guards to separate directory
* **typescript:** drop all axios type definitions

### :bug: Fixes

* **cjs:** directory index specifiers ([6816b97](https://github.com/flex-development/exceptions/commit/6816b97d92b4a343db4911ae35beb88e0db89905))


### :pencil2: Housekeeping

* **typescript:** upgrade to `typescript@4.5.0-beta` ([6b6f198](https://github.com/flex-development/exceptions/commit/6b6f198f889d05958ec1259fe086a0a782ef1352))


### :hammer: Build

* **deps-peer:** add `@firebase/util` and `firebase-admin` as optional deps ([916918f](https://github.com/flex-development/exceptions/commit/916918fa45cfc7d70f775b60de5fc03ae6f9ebfc))
* **deps-peer:** re-add `axios` as optional dep ([d6e733c](https://github.com/flex-development/exceptions/commit/d6e733c4318f9f25985335a14ff6cd82b27e54b2))


### :recycle: Code Improvements

* **guards:** move type guards to separate directory ([611d70f](https://github.com/flex-development/exceptions/commit/611d70f9983b6e86bdff0dabd5ff77de2fdf73a7))
* **typescript:** `FirebaseError` ([c602e7d](https://github.com/flex-development/exceptions/commit/c602e7d00c981afa24d750bb67005afa44465966))
* **typescript:** drop all axios type definitions ([c774c01](https://github.com/flex-development/exceptions/commit/c774c01e6a528a269214ddcdac99c72b257ad3ba))


### :sparkles: Features

* **exceptions:** `ValidationException` ([4365d52](https://github.com/flex-development/exceptions/commit/4365d52e6199b5da9abc36172121ff84fbca9e42))
* **guards:** `isExceptionClassName` ([0b31123](https://github.com/flex-development/exceptions/commit/0b31123d13a6364a3048af9ea98fc09b55d4b096))
* **guards:** `isExceptionCode` ([c7fac42](https://github.com/flex-development/exceptions/commit/c7fac420b02d692918481ad114d81481fa7b1743))
* **guards:** `isExceptionId` ([866bc88](https://github.com/flex-development/exceptions/commit/866bc88e74e8322831151fec32844d4b9941e313))

## [5.0.0](https://github.com/flex-development/exceptions/compare/exceptions@5.0.0-dev.1...exceptions@5.0.0) (2021-10-11)


### :hammer: Build

* **deps:** bump @flex-development/tutils from 4.0.0-dev.0 to 4.0.0 ([d336e49](https://github.com/flex-development/exceptions/commit/d336e49b79a90d4473e1b5b68341c67e9472f969))


## [5.0.0-dev.1](https://github.com/flex-development/exceptions/compare/exceptions@5.0.0-dev.0...exceptions@5.0.0-dev.1) (2021-10-10)


### :hammer: Build

* **deps-dev:** add `trext`, drop `convert-extension` ([1d2b7d6](https://github.com/flex-development/exceptions/commit/1d2b7d67f0857e4c12a92b5179b008e54ea953fe))
* **deps-dev:** interactive upgrades ([d0c9e27](https://github.com/flex-development/exceptions/commit/d0c9e27e66566692965f404c9d03163b23cc052f))

## [5.0.0-dev.0](https://github.com/flex-development/exceptions/compare/exceptions@4.0.1...exceptions@5.0.0-dev.0) (2021-10-07)


### ⚠ BREAKING CHANGES

* **hybrid:** esm-cjs hybrid migration

  - drop `.js` extensions
  - drop `esm2015` and `esm5` build outputs
  - remove `browser`, `es2015`, and `umd` package entrypoints
  - update bundle filenames and locations

### :hammer: Build

* **hybrid:** esm-cjs hybrid migration ([556dc22](https://github.com/flex-development/exceptions/commit/556dc220bbb1aa3d129bfcae73460d11b4ef8ed1))


### :pencil2: Housekeeping

* **release:** set package version ([101dffb](https://github.com/flex-development/exceptions/commit/101dffb949a701bd91e33f2783c12659a6a628e9))

### [4.0.1](https://github.com/flex-development/exceptions/compare/exceptions@4.0.0...exceptions@4.0.1) (2021-09-28)


### :hammer: Build

* **typescript:** generate `.d.ts` files for all build outputs ([0d8ccbe](https://github.com/flex-development/exceptions/commit/0d8ccbeea5887e3ade31294345d6e9135abf85f2))


## [4.0.0](https://github.com/flex-development/exceptions/compare/exceptions@3.0.0...exceptions@4.0.0) (2021-09-28)


### ⚠ BREAKING CHANGES

* **exceptions:** extend `AggregateError` (#6)

### :pencil2: Housekeeping

* **deps-peer:** update typescript peer dep to `>=4.4.0` ([a34d82a](https://github.com/flex-development/exceptions/commit/a34d82ac8766a0b07038eb45ea7586b3f67ab4f5))


### :sparkles: Features

* **exceptions:** extend `AggregateError` ([#6](https://github.com/flex-development/exceptions/issues/6)) ([d5e4d48](https://github.com/flex-development/exceptions/commit/d5e4d4881eadca1d2a6b8bab02209c045c3f41c1))

## [3.0.0](https://github.com/flex-development/exceptions/compare/exceptions@2.0.1...exceptions@3.0.0) (2021-09-26)


### ⚠ BREAKING CHANGES

* `types` directory architecture
* **typescript:** remove `PlainObject` type definition
* pluralize `dto` folder name
* update build output

### :hammer: Build

* update build output ([6f9afb9](https://github.com/flex-development/exceptions/commit/6f9afb93bb8c6680ca2c492a8e67916f0d07ff51))


### :pencil2: Housekeeping

* **tools:** add release workflow cli ([474f803](https://github.com/flex-development/exceptions/commit/474f8036f436c8c9f9efd021ad8f950950131fb4))
* **typescript:** update `tsconfig.json#exclude` ([10e77ed](https://github.com/flex-development/exceptions/commit/10e77ed2fce890a709efb5ee7dcd0d098d333ea5))


### :recycle: Code Improvements

* `types` directory architecture ([0a67677](https://github.com/flex-development/exceptions/commit/0a67677d4c4970d4d87f0fa49700286b9cc9ee5b))
* pluralize `dto` folder name ([c137923](https://github.com/flex-development/exceptions/commit/c137923dc2cdff44c0fd8e70b31ef127f3cd42ef))
* **typescript:** remove `PlainObject` type definition ([250bfcb](https://github.com/flex-development/exceptions/commit/250bfcbe0de3df975d8f41ea3e5b5947a37865ef))
* **yarn:** use yarn workspaces ([080b199](https://github.com/flex-development/exceptions/commit/080b1991e6d8e240fb5b3c4918cb0d6236294edc))

### [2.0.1](https://github.com/flex-development/exceptions/compare/v2.0.0...v2.0.1) (2021-08-09)


### :recycle: Code Improvements

* remove `axios` peer dependency ([b7df553](https://github.com/flex-development/exceptions/commit/b7df553e642c47eb2d71bfc085b5b37c585bd83d))


### :zap: Performance Updates

* update module import paths to reduce bundle sizes ([b3e72e7](https://github.com/flex-development/exceptions/commit/b3e72e70937150512ae81b1a22b6480757a4d86a))


### :book: Documentation

* add `conventionalcommits` readme badge ([839fcdb](https://github.com/flex-development/exceptions/commit/839fcdbbdcb3059c905aa461bd19454405cdc8eb))
* add package manager specific installation docs ([5565638](https://github.com/flex-development/exceptions/commit/55656389ce0729ed31b60f829956e02cdbe31451))
* update `@module` annotations ([c255027](https://github.com/flex-development/exceptions/commit/c2550275bc9c116990d35ff7164773b4f0e83521))

## [2.0.0](https://github.com/flex-development/exceptions/compare/v1.0.0...v2.0.0) (2021-05-03)


### :book: Documentation

* fix changelog formatting ([7113828](https://github.com/flex-development/exceptions/commit/7113828bc19f3aa542f1579b65a543a652168a54))
* update contributing guide ([e845b2c](https://github.com/flex-development/exceptions/commit/e845b2ccea3a1a16af80b4b4a4c9092b2ea073ff))
* update install instructions ([680e38b](https://github.com/flex-development/exceptions/commit/680e38b1538ac9680cb920676eaa0a046b516e9e))
* v1.0.0 technical spec ([d161fe1](https://github.com/flex-development/exceptions/commit/d161fe1c99a99a9852a87600278200f222b755cc))

## 1.0.0 (2021-04-24)


### :book: Documentation

* getting started, installation, usage ([070c1ba](https://github.com/flex-development/exceptions/commit/070c1ba09b117c94c3402c37c007fc4c22533aa1))
* gpr ([58ddc48](https://github.com/flex-development/exceptions/commit/58ddc482838a9e03e264ae5406a0a9e7807e1134))
* making changes ([1335836](https://github.com/flex-development/exceptions/commit/13358369e1d98dc7a90b7ab23418dbfeb2aa8ba0))
