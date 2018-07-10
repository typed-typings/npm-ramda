# types/npm-ramda

[![Travis](https://travis-ci.org/types/npm-ramda.svg?branch=master)](https://travis-ci.org/types/npm-ramda)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/donnut/typescript-ramda)
[![Greenkeeper](https://badges.greenkeeper.io/types/npm-ramda.svg)](https://greenkeeper.io/)

TypeScript's type definitions for [Ramda](https://github.com/ramda/ramda)

## Status

Typing compatible with `ramda@0.25.0` and `typescript@~2.9.2` (strictFunctionTypes: false)

***Note***: many of the functions in Ramda are still hard to properly type in TypeScript, with issues mainly centered around partial application, currying, and composition, especially so in the presence of generics. And yes, those are probably why you'd be using Ramda in the first place, making these issues particularly problematic to type Ramda for TypeScript.

## Features

- support placeholder ( `R.__` )
- support partial import ( `import map = require("ramda/src/map")` )
- support selectable overloads ( use 0-param: `R.map<"11", "list">()` )

## Usage

The following command install the types from the `dist` branch, which is the newest version and contains `selectable` and `placeholder` types.

```sh
# using npm
npm install --save-dev types/npm-ramda#dist

# using yarn
yarn add --dev types/npm-ramda#dist

# using jspm
jspm install --dev github:types/npm-ramda@dist

# you can also choose which version to install using #<branch/commit/tag>
yarn add --dev types/npm-ramda#dist-simple # contains basic features
yarn add --dev types/npm-ramda#dist-selectable # contains selectable-overloads
yarn add --dev types/npm-ramda#dist-placeholder # contains placeholder
```

If you load Ramda via a script tag, install with the `--global` flag instead.

If not using npm/yarn, you may need to add these typings to `paths` in `tsconfig.json`:

For the full package:
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths" : {
       "ramda": [
         "location-of-types/npm-ramda-package/index"
       ]
     }
  }
}
```

If using partial imports:
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths" : {
       "ramda/src/*": [
         "location-of-types/npm-ramda-package/src/*"
       ]
     }
  }
}
```

## Testing

This project uses [dts-jest](https://github.com/ikatyang/dts-jest) to test types and values simultaneously, so as to ensure our types are always up to date.

```sh
# test
yarn run test

# test with watching mode
yarn run test -- --watch
```

After you changed some tests/types, you have to run `yarn run remap` to update the diff-friendly snapshots, and you can see their diff clearly in generated files (`./snapshots/*.ts`).

(You can also run `yarn run remap-watch` to use it in watching mode.)

test files:

- unit tests: `./tests/*.ts` (test types)
- integration tests: `./tests/ramda-tests.ts` (test types and values)

## Building types

```sh
# build types (./templates/*.ts -> ./ramda/dist/**/*.d.ts)
yarn run build

# build types with watching mode
yarn run build-watch
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
[templates](https://github.com/types/npm-ramda/tree/master/templates#readme).
