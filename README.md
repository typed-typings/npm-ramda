##Type definitions for [Ramda](https://github.com/ramda/ramda)
[![Build Status](https://travis-ci.org/donnut/typescript-ramda.svg?branch=master)](https://travis-ci.org/donnut/typescript-ramda)

Test with:
```bash
tsc --module amd ramda-tests.ts
```

Pull requests are welcome!

##Usage and limitation
To use the Ramda type definitions include the following line in each of the .ts files
that use Ramda:
```
    /// <reference path="./path/to/ramda.d.ts" />
```

In Ramda almost all functions are curried. TypeScript is not equipped well to support
this. We have tried to use TypeScript to its max and allow for curried functions
to be applied in maximum two steps. For binary function you could do:

```javascript
R.indexOf(10, [1,2,3,4])
R.indexOf(10)([1,2,3,4])
```
and for ternary functions
```javascript
R.insert(2, 'x', [1,2,3,4])
R.insert(2)('x', [1,2,3,4])
R.insert(2, 'x')([1,2,3,4])

R.insert(2)('x')([1,2,3,4]) // => type error!
```

In the last application of `insert` TypeScript will complain that the supplied parameters do not match the target. However, this is a valid application of the Ramda function.

##Note on placeholders
Due to incompatiblity problems with typescript's typing system, Ramda's placeholder typing is removed. For binary functions the same functionaly
can be achieved using `R.flip`. For example:
```typescript
// using a placeholder ...
R.subtract(*placeholder*, 3);
// ... is the same as
R.flip(R.subtract)(3);
```

##Status
The definitions are reorganized and updated and are more or less compatible with Ramda v0.21.0. The API of Ramda is not stable yet.

This needs to be done:
- include all functions of the latest Ramda version
