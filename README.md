# types/npm-ramda

[![Travis](https://travis-ci.org/types/npm-ramda.svg?branch=master)](https://travis-ci.org/types/npm-ramda)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/donnut/typescript-ramda)
[![Greenkeeper](https://badges.greenkeeper.io/types/npm-ramda.svg)](https://greenkeeper.io/)

TypeScript's type definitions for [Ramda](https://github.com/ramda/ramda)

## Status

Typing compatible with ramda version v0.24.1

***Note***: many of the functions in Ramda are still hard to properly type in Ramda, with issues mainly centered around partial application, currying, and composition, especially so in the presence of generics. And yes, those are probably why you'd be using Ramda in the first place, making these issues particularly problematic to type Ramda for TypeScript. A few links to issues at TS can be found [below](#Roadmap).

## Features

- support placeholder ( `R.__` )
- support partial import ( `import * as map from "ramda/src/map"` )
- support selectable overloads ( use 0-param: `R.map<"11", "list">()` )

## Usage

The following command install the types from the `dist` branch, which is the newest version and contains `selectable` and `placeholder` types.

```sh
# using npm
npm install --save-dev ikatyang/types-ramda#dist

# using yarn
yarn add --dev ikatyang/types-ramda#dist
```

If you use the package through a script tag, install with the `--global` flag instead.

## Testing

```sh
# build types (./templates/*.ts -> ./ramda/dist/**/*.d.ts)
yarn run build

# build types with watching mode
yarn run build-watch

# check if generated definitions are valid
yarn run build-check

# snapshot test for types
yarn run test

# snapshot test for types with watching mode
yarn run test -- --watch

# test utils
yarn run test-utils

# actual test
yarn run test-actual

# NOTE: test files
#   unit tests -> ./tests/*.ts
#   actual tests -> ./tests/ramda-tests.ts
#   integration tests -> ./tests/ramda-tests.ts

# remap snapshots (./tests/__snapshots__/*.ts.snap -> ./snapshots/*.ts)
yarn run remap

# remap snapshots with watching mode
yarn run remap-watch

# check if snapshot is outdated
yarn run remap-check
```

## FAQ

> Why are the typings here not carbon copies of the ones in the Ramda docs?
- There are some differences, among which TypeScript's syntax, though the goal differs here as well: while the Ramda docs aim to explain the functions, the goal here is to accurately infer types within TypeScript. Longer version [here](https://github.com/types/npm-ramda/pull/147).

> Why does `compose` not infer well?
- TypeScript cannot do backward inference as needed for `compose` ([ref](https://github.com/Microsoft/TypeScript/issues/15680#issuecomment-307571917)). The `pipe` variants work a bit better than the `compose` versions.

## Contributing

Pull requests are welcome!
If you'd like to help out, two good places to start are the [issues](https://github.com/types/npm-ramda/issues)
as well as the [tests](https://github.com/types/npm-ramda/blob/master/tests/ramda-tests.ts).

Do note that all of the typings are now being generated (automatically) using the
[tempaltes](https://github.com/types/npm-ramda/tree/master/templates#readme).

## Roadmap

High-level to-do to address recurring issues:

- `pipe` / `compose`:
  - ~~using optional generics so as to allow annotating input parameter type(s)?~~
  - [`gcnew/TypeScript#polyFuncUnification`](https://github.com/Microsoft/TypeScript/issues/9949#issuecomment-271926278)?
- tuple `map`:
  - ~~[`Return`](https://github.com/Microsoft/TypeScript/issues/6606#issuecomment-284215602)~~
- fix curry type degeneration with generics
- `genCurried`: track generics' dependencies
- consider [dts-dom](https://github.com/RyanCavanaugh/dts-dom) as a codegen alternative
