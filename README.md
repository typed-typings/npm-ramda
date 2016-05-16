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

Another nice Ramda feature is the use of placeholders in curryed functions.
Calling a function with placeholders creates a new (curryed) function with the
placeholder arguments to be supplied later. It is similar to calling a curryed function with partial arguments, without to need to supply arguments from
left to rigth. The next example of valid function applications of `R.insert`
 will clarify this:

```javascript
R.insert(R.__, 'x', [1,2,3,4])(2)
R.insert(2, R.__, [1,2,3,4])('x')
R.insert(R.__, 'x', R.__)(2)([1,2,3,4])
```

TypeScript can recognize placeholders as specific types, but there are edge cases
in with it fails to distinguish signature patterns correctly. These cases occur in
ternary functions and function of higher order. Binary function pose no problem.

##Status
The definitions are reorganized and updated and are more or less compatible with Ramda v0.21.0. The API of Ramda is not stable yet.

This needs to be done:
- include all functions of the latest Ramda version (currently 0.19.1)
- reorganize functions by categories (List, Object, Function, etc)
- find a elegant way to reflect the Ramda categories into TypeScript interface names
  that are displayed when hovering over a function. At to moment `R.List.<function name>` is displayed, regardless of the real category a function resides.
- Shorten function descriptions to one or two sentences to limit the size of the
  tooltip in some IDE's.
