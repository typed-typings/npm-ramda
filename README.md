##Type definitions for [Ramda](https://github.com/ramda/ramda)

[![Build Status](https://travis-ci.org/types/npm-ramda.svg?branch=master)](https://travis-ci.org/types/npm-ramda)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/donnut/typescript-ramda?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Testing:
```
# check using `typings-checker` (recommended):
npm run types

# compile errors only (doesn't prevent `any`, and can give false positives for bits that should error):
npm test
# without npm (useful on Windows):
node ./node_modules/typescript/bin/tsc --lib es2015 --module commonjs tests/test.ts --noEmit
```

## Usage

Install the typings for node using:
```bash
npm install types/npm-ramda --saveDev
```
If you use the package through a script tag, use:
```bash
npm install types/npm-ramda --saveDev --global
```

## Note on placeholders
Due to incompatiblity problems with typescript's typing system, Ramda's placeholder
typing is removed. For binary functions the same functionally can be achieved using
`R.flip`. For example:

```typescript
// using a placeholder ...
R.subtract(R.__, 3);
// ... is the same as
R.flip(R.subtract)(3);
```

In Ramda almost all functions are curried. TypeScript does not natively support
currying, so in cases where we've omitted a combination this might break.
Example of a potential gap:
```typescript
R.insert(2, 'x', [1,2,3,4])
R.insert(2)('x', [1,2,3,4])
R.insert(2, 'x')([1,2,3,4])
R.insert(2)('x')([1,2,3,4]) // => type error!
```

## Status
Typing compatible with ramda version 0.23.0.

## Contributing

Pull requests are welcome!
If you'd like to help out, two good places to start are the [issues](https://github.com/types/npm-ramda/issues)
as well as the [failed tests](https://github.com/types/npm-ramda/blob/master/tests/test.ts.out).

Do note that quite some of the typings are now being generated (manually) using the
[scripts](https://github.com/types/npm-ramda/blob/master/scripts.js),
as the typings are gradually getting out of hand to manually defined in the
[typings file](https://github.com/types/npm-ramda/blob/master/index.d.ts).

