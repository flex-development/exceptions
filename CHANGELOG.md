## [exceptions@8.0.0-alpha.5](https://github.com/flex-development/exceptions/compare/exceptions@8.0.0-alpha.4...exceptions@8.0.0-alpha.5) (2023-03-19)


### :bug: Fixes

* **dtos:** [`ExceptionDTO`] add `OneOrMany<T>` to index signature type ([76d81c4](https://github.com/flex-development/exceptions/commit/76d81c43953b0550c79014335f9a41910b03f6ad))


### :mechanical_arm: Refactors

* **dtos:** [`ExceptionDTO`] allow all `Jsonifiable` types ([e35b81f](https://github.com/flex-development/exceptions/commit/e35b81f0e340e4ee82ccd3ae2593d706e7b28a77))

## [exceptions@8.0.0-alpha.4](https://github.com/flex-development/exceptions/compare/exceptions@8.0.0-alpha.3...exceptions@8.0.0-alpha.4) (2023-03-19)


### :package: Build

* **deps-dev:** bump cspell from 6.29.3 to 6.30.0 ([#80](https://github.com/flex-development/exceptions/issues/80)) ([3f5f7da](https://github.com/flex-development/exceptions/commit/3f5f7da0b01d2c876aa2fb0475a17c809812d9e3))
* **deps-dev:** bump esbuild from 0.17.11 to 0.17.12 ([#79](https://github.com/flex-development/exceptions/issues/79)) ([4f315d4](https://github.com/flex-development/exceptions/commit/4f315d4b6ccf7401e59924490680198156b0435b))


### :mechanical_arm: Refactors

* **ts:** allow object types to exclude index signature ([4de8946](https://github.com/flex-development/exceptions/commit/4de8946bd7215fc2f044d2681a00dce328bd17db))

## [exceptions@8.0.0-alpha.3](https://github.com/flex-development/exceptions/compare/exceptions@8.0.0-alpha.2...exceptions@8.0.0-alpha.3) (2023-03-16)


### ⚠ BREAKING CHANGES

* **enums:** match status codes to mdn
* rewrite project

### :package: Build

* mark package as side-effects free ([bd52e80](https://github.com/flex-development/exceptions/commit/bd52e8091bfc6836fddee6315c7985dfb7c0a52d))
* use `mkbuild` to build project ([5406594](https://github.com/flex-development/exceptions/commit/5406594fe0722c3c3780eef5ef1f41cbcca50a54))
* **deps-dev:** bump @typescript-eslint/eslint-plugin from 5.54.1 to 5.55.0 ([#67](https://github.com/flex-development/exceptions/issues/67)) ([9df752b](https://github.com/flex-development/exceptions/commit/9df752bff66c76ea5b79c7f66554b6d81229240d))
* **deps-dev:** bump @typescript-eslint/parser from 5.54.1 to 5.55.0 ([#66](https://github.com/flex-development/exceptions/issues/66)) ([3a7b823](https://github.com/flex-development/exceptions/commit/3a7b823d35c6256124c4b7a406c0d27af5ca00af))
* **deps-dev:** bump @vitest/coverage-c8 from 0.29.2 to 0.29.3 ([#69](https://github.com/flex-development/exceptions/issues/69)) ([5cd86be](https://github.com/flex-development/exceptions/commit/5cd86bebc1e7d9fd2133ec3db209b0746d52e6ba))
* **deps-dev:** bump @vitest/ui from 0.29.2 to 0.29.3 ([#70](https://github.com/flex-development/exceptions/issues/70)) ([bfe2adc](https://github.com/flex-development/exceptions/commit/bfe2adc4457b632280ab2b873cfa638631857d72))
* **deps-dev:** bump cspell from 6.29.0 to 6.29.3 ([#77](https://github.com/flex-development/exceptions/issues/77)) ([6fa7b6f](https://github.com/flex-development/exceptions/commit/6fa7b6fd2e39f460a36a23b1aff0bc699305d7b5))
* **deps-dev:** bump eslint-plugin-jsdoc from 40.0.1 to 40.0.3 ([#75](https://github.com/flex-development/exceptions/issues/75)) ([4ce5c54](https://github.com/flex-development/exceptions/commit/4ce5c54b5b1968e3fa1bdb3770ae860607b781ca))
* **deps-dev:** bump eslint-plugin-jsonc from 2.6.0 to 2.7.0 ([#76](https://github.com/flex-development/exceptions/issues/76)) ([33582ed](https://github.com/flex-development/exceptions/commit/33582ed17e44073d4ffb95237b6d8583a0aa146d))
* **deps-dev:** bump vite from 4.1.4 to 4.2.0 ([#73](https://github.com/flex-development/exceptions/issues/73)) ([840ea9e](https://github.com/flex-development/exceptions/commit/840ea9e30485e9476cffad84579c4e81b88970a7))
* **deps-dev:** bump vite-tsconfig-paths from 4.0.5 to 4.0.7 ([#72](https://github.com/flex-development/exceptions/issues/72)) ([4be9869](https://github.com/flex-development/exceptions/commit/4be9869bf47103021fa7269e82b30d0f4b83471d))
* **deps-dev:** bump vitest from 0.29.2 to 0.29.3 ([#71](https://github.com/flex-development/exceptions/issues/71)) ([eff645d](https://github.com/flex-development/exceptions/commit/eff645d42a9f9f041ae44ab345cefa3527e7ab64))
* **deps:** bump @flex-development/aggregate-error-ponyfill from 2.0.0-alpha.2 to 2.0.0-alpha.4 ([599fdca](https://github.com/flex-development/exceptions/commit/599fdcaf716dd29205138497cbc6d99fef204c21))
* **deps:** bump @flex-development/aggregate-error-ponyfill from 2.0.0-alpha.4 to 2.0.1 ([af81ab6](https://github.com/flex-development/exceptions/commit/af81ab67dc8621869094d1855e428e2ca7764861))
* **deps:** bump @flex-development/tutils from 5.0.0 to 5.0.1 ([ae421cf](https://github.com/flex-development/exceptions/commit/ae421cf416e30a6b62385886f3c9b4ffa5dccdee))


### :robot: Continuous Integration

* [[@dependabot](https://github.com/dependabot)] configure private registry ([acdac01](https://github.com/flex-development/exceptions/commit/acdac0180b5a3270fc1c415c7140b5c3b4f72cc1))
* **deps:** bump actions/add-to-project from 0.3.0 to 0.4.1 ([#63](https://github.com/flex-development/exceptions/issues/63)) ([b896e21](https://github.com/flex-development/exceptions/commit/b896e212760b90f23928adcd3ea189c8b3299097))
* **deps:** bump actions/cache from 3.3.0 to 3.3.1 ([#64](https://github.com/flex-development/exceptions/issues/64)) ([0dde76f](https://github.com/flex-development/exceptions/commit/0dde76f4c74d7b8a3fdf9b950ce4e9e1765c78d1))
* **deps:** bump actions/checkout from 3.0.2 to 3.1.0 ([#47](https://github.com/flex-development/exceptions/issues/47)) ([69bb589](https://github.com/flex-development/exceptions/commit/69bb5897822087a7ce38e615c3ef123ab4beafdb))
* **deps:** bump actions/checkout from 3.1.0 to 3.2.0 ([#58](https://github.com/flex-development/exceptions/issues/58)) ([bd19d3f](https://github.com/flex-development/exceptions/commit/bd19d3fc91e3354860e42d5315fdffe8c9f33113))
* **deps:** bump actions/checkout from 3.2.0 to 3.3.0 ([#60](https://github.com/flex-development/exceptions/issues/60)) ([e5de25a](https://github.com/flex-development/exceptions/commit/e5de25a6523c4926bc9b49856c6102b76a831f4e))
* **deps:** bump actions/checkout from 3.3.0 to 3.4.0 ([#65](https://github.com/flex-development/exceptions/issues/65)) ([8874dd5](https://github.com/flex-development/exceptions/commit/8874dd5418febdfb0eac943a978a81b7604a5efb))
* **deps:** bump actions/github-script from 6.2.0 to 6.3.0 ([#42](https://github.com/flex-development/exceptions/issues/42)) ([f828ca0](https://github.com/flex-development/exceptions/commit/f828ca05e526a0dd8b28abc4054f6d8732cf8f15))
* **deps:** bump actions/github-script from 6.3.0 to 6.3.1 ([#46](https://github.com/flex-development/exceptions/issues/46)) ([6862838](https://github.com/flex-development/exceptions/commit/6862838c8c156a146f11202983ef1b4080c9bfac))
* **deps:** bump actions/github-script from 6.3.1 to 6.3.2 ([#50](https://github.com/flex-development/exceptions/issues/50)) ([1309cf6](https://github.com/flex-development/exceptions/commit/1309cf6afbff675216d2a59fde52b4fc72354afe))
* **deps:** bump actions/github-script from 6.3.2 to 6.3.3 ([#51](https://github.com/flex-development/exceptions/issues/51)) ([ddfc715](https://github.com/flex-development/exceptions/commit/ddfc7150356f1b559f3da4d404e1d8a5f7bc03b9))
* **deps:** bump actions/github-script from 6.3.3 to 6.4.0 ([#62](https://github.com/flex-development/exceptions/issues/62)) ([2314663](https://github.com/flex-development/exceptions/commit/23146636b2e92cabcfa62d8a5fb6e207b1e5db9a))
* **deps:** bump actions/setup-node from 3.4.1 to 3.5.0 ([#44](https://github.com/flex-development/exceptions/issues/44)) ([c2be021](https://github.com/flex-development/exceptions/commit/c2be02154725140712909905b6732bbf34b6a9f7))
* **deps:** bump actions/setup-node from 3.5.0 to 3.6.0 ([#59](https://github.com/flex-development/exceptions/issues/59)) ([614ca27](https://github.com/flex-development/exceptions/commit/614ca272362c45c94a70a53131aa27b6c689f75e))
* **deps:** bump crazy-max/ghaction-import-gpg from 5.1.0 to 5.2.0 ([#53](https://github.com/flex-development/exceptions/issues/53)) ([58f4f40](https://github.com/flex-development/exceptions/commit/58f4f4085706dd1dc9b7e82bee98f4c1fe07eab6))
* **deps:** bump dependabot/fetch-metadata from 1.3.3 to 1.3.5 ([#54](https://github.com/flex-development/exceptions/issues/54)) ([826bf88](https://github.com/flex-development/exceptions/commit/826bf881e21a4e250ae3ddf7a48e2cd6bf1c28fa))
* **deps:** bump dependabot/fetch-metadata from 1.3.5 to 1.3.6 ([#61](https://github.com/flex-development/exceptions/issues/61)) ([65e46dd](https://github.com/flex-development/exceptions/commit/65e46dd94e5d521510078272932cd0dec133e6bd))
* **deps:** bump dessant/lock-threads from 3.0.0 to 4.0.0 ([#57](https://github.com/flex-development/exceptions/issues/57)) ([b14bfb6](https://github.com/flex-development/exceptions/commit/b14bfb63904a399a664c09432324a7e4b2e579ea))
* **deps:** bump flex-development/dist-tag-action from 1.1.0 to 1.1.2 ([#55](https://github.com/flex-development/exceptions/issues/55)) ([c4e99cf](https://github.com/flex-development/exceptions/commit/c4e99cf1484704aba12d5bd90c7fd3d133c2ce67))
* **deps:** bump hmarr/debug-action from 2.0.1 to 2.1.0 ([#48](https://github.com/flex-development/exceptions/issues/48)) ([7299e6e](https://github.com/flex-development/exceptions/commit/7299e6e618d46159a71490cf70fd11f574588b94))
* **deps:** bump octokit/graphql-action from 2.2.22 to 2.2.23 ([#49](https://github.com/flex-development/exceptions/issues/49)) ([6168ff4](https://github.com/flex-development/exceptions/commit/6168ff463e7e4958936a19dfcbda9f47bfeecb47))
* **workflows:** [`add-to-project`] add items from repo admin account ([834e57a](https://github.com/flex-development/exceptions/commit/834e57a214638fe2a8d5a0ce263036d84bc0287b))
* **workflows:** [`add-to-project`] run workflow when pr is synchronized ([0ada7fc](https://github.com/flex-development/exceptions/commit/0ada7fcacea7e894740f2847837f02fc615dae5a))
* **workflows:** [`approve-pr`] refactor approval step conditional ([e3b15aa](https://github.com/flex-development/exceptions/commit/e3b15aa0e9ba519bf1dd290a5bdd52552c9ff553))
* **workflows:** [`ci`] split `ci` job into multiple jobs ([60e7339](https://github.com/flex-development/exceptions/commit/60e73396d2802a329451aaa0197094e690b644a2))
* **workflows:** [`ci`] upload coverage report to codecov ([107788a](https://github.com/flex-development/exceptions/commit/107788ac07358dceab187ddddf74bee95f1b620f))
* **workflows:** [`dependabot-auto`] sign lockfile fix commit ([b7f398a](https://github.com/flex-development/exceptions/commit/b7f398a3fbc1abacb7fd3d8b68fcc4bfbecabb1f))
* **workflows:** [`integrity`] update `pull_request` event activity types ([1a7fb24](https://github.com/flex-development/exceptions/commit/1a7fb24a3f9a9a91415e8d7ad42a99e011b0373b))
* **workflows:** add `auto-merge` ([d8cff56](https://github.com/flex-development/exceptions/commit/d8cff562aeea7cec089d5bd201cb25ab8d7586ec))
* **workflows:** add `infrastructure` ([0a80040](https://github.com/flex-development/exceptions/commit/0a80040664c3240abd819efa8a9e995c2f488742))
* **workflows:** use environment files ([3513dd7](https://github.com/flex-development/exceptions/commit/3513dd7af43376cd03547ea4c7ee9b50140a1cab))


### :pencil: Documentation

* add "contributor covenant code of conduct" ([eae57ff](https://github.com/flex-development/exceptions/commit/eae57ffa06c37aa1a8f146c9724bb9eebc3ccf8c))
* data transfer objects ([cb5d300](https://github.com/flex-development/exceptions/commit/cb5d300a9836a0237ec617950c6fab19971d9f2f))
* enums ([42fa6f1](https://github.com/flex-development/exceptions/commit/42fa6f1cc89b235ec4a9e3c6e98c42a1b4c89d9f))
* interfaces ([b28253a](https://github.com/flex-development/exceptions/commit/b28253a0ea32e92b70ce15f37a58919fb5db3d7c))
* types ([735d6a8](https://github.com/flex-development/exceptions/commit/735d6a8945b6df1af2ee05765f3c819a5c876943))
* update section "what is this?" ([6d4bd9a](https://github.com/flex-development/exceptions/commit/6d4bd9a9107092afa6a3a8a311c2b045c108f8e4))
* **interfaces:** improve `FirebaseError` docs ([09150b4](https://github.com/flex-development/exceptions/commit/09150b47c2ef228ee3e03b6564c6b3bfb3905659))


### :sparkles: Features

* **dtos:** `HttpExceptionDTO` ([6906088](https://github.com/flex-development/exceptions/commit/69060885a0523a8a4afbf4529f83743686952695))
* **exceptions:** `HttpException` ([bced4bd](https://github.com/flex-development/exceptions/commit/bced4bdd7798b9f4570c7976f85945d359793c1f))
* **interfaces:** `HttpExceptionJSON` ([781b971](https://github.com/flex-development/exceptions/commit/781b971491a492ed836156a23b312ed38d9e274d))


### :bug: Fixes

* **install:** [git] make `postinstall` script work with git install ([93d6faf](https://github.com/flex-development/exceptions/commit/93d6fafac20ae177d9295411f9af2431d8bc0a27))


### :house_with_garden: Housekeeping

* cleanup ([84f3f9e](https://github.com/flex-development/exceptions/commit/84f3f9ef039af5b5fdeb249e940e50f0f33c0d30))
* update project architecture ([655a16f](https://github.com/flex-development/exceptions/commit/655a16f7985891b9ff469c9e982bbf499df48f64))
* update project architecture ([b88f99d](https://github.com/flex-development/exceptions/commit/b88f99d42d0ffb3a0b020d6ac1003d9d64da7bd7))
* **github:** add "package manager" dropdown to bug report template ([55e916a](https://github.com/flex-development/exceptions/commit/55e916a96af402e4542c09655601fd31c095411f))
* **github:** add "typescript version" input to bug report template ([00a937d](https://github.com/flex-development/exceptions/commit/00a937d65c620cfcf0f5a89f12ef3a035f22d2c4))
* **github:** configure sponsor button ([ea43f2d](https://github.com/flex-development/exceptions/commit/ea43f2d6e6cd9187a81e3a786758a5fdf5c7bac4))
* **github:** remove "tests" section from pull request template ([448862e](https://github.com/flex-development/exceptions/commit/448862e82489cfce19c2f94b5c5657bf72c1eb11))
* **github:** update project description ([a731f76](https://github.com/flex-development/exceptions/commit/a731f76e8b37b3a19f4d348d392935535493c644))
* **tests:** codecov integration ([ee9ba47](https://github.com/flex-development/exceptions/commit/ee9ba4747c1cdca237cec2265f6da681ee47ecf9))


### :mechanical_arm: Refactors

* rewrite project ([f4718d6](https://github.com/flex-development/exceptions/commit/f4718d65ac9f9493d3ce66ea43c897b29e6f6de7))
* **enums:** match status codes to mdn ([2f66ff2](https://github.com/flex-development/exceptions/commit/2f66ff21792b49305b86187430474832d1c5b1bc))


### :white_check_mark: Testing

* **ts:** add type tests ([693b719](https://github.com/flex-development/exceptions/commit/693b719d832e3eb964a15bca9d8ec3112758dc56))

## [exceptions@8.0.0-alpha.2](https://github.com/flex-development/exceptions/compare/exceptions@8.0.0-alpha.1...exceptions@8.0.0-alpha.2) (2022-08-29)


### :package: Build

* **deps:** remove @types/lodash.isplainobject ([cafbfb7](https://github.com/flex-development/exceptions/commit/cafbfb7e631c5719d070d467af3e9ad0c6706e03))
* **deps:** remove lodash.isplainobject ([810aca0](https://github.com/flex-development/exceptions/commit/810aca049610fd26ad290cb91c179956c4c5be11))
* **deps:** replace lodash dependencies with radash ([13a351c](https://github.com/flex-development/exceptions/commit/13a351c5050a1b0d854eee32e3f3fe1e559623b3))
* **exports:** remove `.d.ts` outputs ([b0b8cbc](https://github.com/flex-development/exceptions/commit/b0b8cbceaab28172123a1425a06a670f65dc9103))


### :pencil: Documentation

* built with ([956dd03](https://github.com/flex-development/exceptions/commit/956dd036aa5351908c2ad79cc2d4a711b4194973))
* **exceptions:** `class Exception<T = any> extends AggregateError<T>` ([6fa084c](https://github.com/flex-development/exceptions/commit/6fa084c75bb9437f46d3166f5e574ad685286994))


### :bug: Fixes

* tsconfig path resolution in build files ([6bf6e3d](https://github.com/flex-development/exceptions/commit/6bf6e3d2a834a6b2e2bca7e142694e2c854c1f90))
* **interfaces:** add `XMLHttpRequest` to `AxiosError#request` definition ([edaa93f](https://github.com/flex-development/exceptions/commit/edaa93f6b822d5dcccd5a3a7ee0166be1911329c))

## [exceptions@8.0.0-alpha.1](https://github.com/flex-development/exceptions/compare/exceptions@7.0.1...exceptions@8.0.0-alpha.1) (2022-08-28)


### ⚠ BREAKING CHANGES

* use default exports
* **dtos:** remove `.dto` file extension
* **types:** remove `.type` file extension
* **interfaces:** remove `.interface` file extension
* **guards:** remove `.guard` file extension
* **enums:** remove `.enum` file extension
* move constants to `config` directory

### :robot: Continuous Integration

* **deps:** bump actions/github-script from 6.1.1 to 6.2.0 ([#39](https://github.com/flex-development/exceptions/issues/39)) ([698b514](https://github.com/flex-development/exceptions/commit/698b514eb0d34ea08117940590710e422d895810))


### :house_with_garden: Housekeeping

* refactor project architecture ([50ad1d7](https://github.com/flex-development/exceptions/commit/50ad1d74e99807cbed78cdd1385f1e511f83127e))


### :zap: Refactors

* move constants to `config` directory ([2cad8f2](https://github.com/flex-development/exceptions/commit/2cad8f23db5763cd8d87566bb699cf91d6d337b8))
* use default exports ([1aa6433](https://github.com/flex-development/exceptions/commit/1aa6433746ee486b090e32fc939e0b14a3b48f20))
* **dtos:** remove `.dto` file extension ([0920a64](https://github.com/flex-development/exceptions/commit/0920a64cf38b0a085876821f0d2dcac839987bd2))
* **enums:** remove `.enum` file extension ([91dfcfc](https://github.com/flex-development/exceptions/commit/91dfcfcbfcb88e48719e25795e4aeffc036c7370))
* **guards:** remove `.guard` file extension ([2c738f8](https://github.com/flex-development/exceptions/commit/2c738f8e62025b5a082a1455a96e6c0fc93e8ed8))
* **interfaces:** remove `.interface` file extension ([a7d5bb6](https://github.com/flex-development/exceptions/commit/a7d5bb67eff5c05339030fe0e0a5da2b1f2e6cc2))
* **types:** remove `.type` file extension ([8ea82cc](https://github.com/flex-development/exceptions/commit/8ea82cc3c53bf1477e9102845d4bbb5d37afe85a))

## [7.0.1](https://github.com/flex-development/exceptions/compare/exceptions@7.0.0...exceptions@7.0.1) (2021-11-05)


### :bug: Fixes

* **exceptions:** `AggregateError` polyfill ([a147836](https://github.com/flex-development/exceptions/commit/a1478365a0664935fa72633e817e3f9d8d292167))


### :pencil2: Housekeeping

* **tests:** add coverage workflow ([bee90a0](https://github.com/flex-development/exceptions/commit/bee90a0b26b9fe9761e3d32bdc0b4b1b187805ba))
* **tests:** mocha-chai migration ([df3fffe](https://github.com/flex-development/exceptions/commit/df3fffe44763fef57a02b7f91ac8e6bb4ed48c87))

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

## [6.0.1](https://github.com/flex-development/exceptions/compare/exceptions@6.0.0...exceptions@6.0.1) (2021-10-16)


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

## [4.0.1](https://github.com/flex-development/exceptions/compare/exceptions@4.0.0...exceptions@4.0.1) (2021-09-28)


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

## [2.0.1](https://github.com/flex-development/exceptions/compare/v2.0.0...v2.0.1) (2021-08-09)


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
