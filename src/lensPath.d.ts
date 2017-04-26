/**
 * This is auto generated source.
 */

import { Path, List, Prop } from '../interfaces';


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string & keyof O,
  P2 extends string & keyof O, P3 extends string & keyof O,
  P4 extends string & keyof O, P5 extends string & keyof O,
  P6 extends string & keyof O, P7 extends string & keyof O,
  P8 extends string & keyof O,
  O extends {[K in P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8]: any}>(
  ps: [P1, P2, P3, P4, P5, P6, P7, P8], obj: O):
  [O[P1], O[P2], O[P3], O[P4], O[P5], O[P6], O[P7], O[P8]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string & keyof O,
  P2 extends string & keyof O, P3 extends string & keyof O,
  P4 extends string & keyof O, P5 extends string & keyof O,
  P6 extends string & keyof O, P7 extends string & keyof O,
  O extends {[K in P1 | P2 | P3 | P4 | P5 | P6 | P7]: any}>(
  ps: [P1, P2, P3, P4, P5, P6, P7], obj: O):
  [O[P1], O[P2], O[P3], O[P4], O[P5], O[P6], O[P7]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string & keyof O,
  P2 extends string & keyof O, P3 extends string & keyof O,
  P4 extends string & keyof O, P5 extends string & keyof O,
  P6 extends string & keyof O,
  O extends {[K in P1 | P2 | P3 | P4 | P5 | P6]: any}>(
  ps: [P1, P2, P3, P4, P5, P6], obj: O):
  [O[P1], O[P2], O[P3], O[P4], O[P5], O[P6]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string & keyof O,
  P2 extends string & keyof O, P3 extends string & keyof O,
  P4 extends string & keyof O, P5 extends string & keyof O,
  O extends {[K in P1 | P2 | P3 | P4 | P5]: any}>(ps: [P1, P2, P3, P4, P5],
  obj: O): [O[P1], O[P2], O[P3], O[P4], O[P5]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string & keyof O,
  P2 extends string & keyof O, P3 extends string & keyof O,
  P4 extends string & keyof O, O extends {[K in P1 | P2 | P3 | P4]: any}>(
  ps: [P1, P2, P3, P4], obj: O): [O[P1], O[P2], O[P3], O[P4]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string & keyof O,
  P2 extends string & keyof O, P3 extends string & keyof O,
  O extends {[K in P1 | P2 | P3]: any}>(ps: [P1, P2, P3], obj: O):
  [O[P1], O[P2], O[P3]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string & keyof O,
  P2 extends string & keyof O, O extends {[K in P1 | P2]: any}>(
  ps: [P1, P2], obj: O): [O[P1], O[P2]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string & keyof O,
  O extends {[K in P1]: any}>(ps: [P1], obj: O): [O[P1]];

// curried


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string,
  P6 extends string, P7 extends string, P8 extends string>(
  ps: [P1, P2, P3, P4, P5, P6, P7, P8]):
  <O extends {[K in P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4], O[P5], O[P6], O[P7], O[P8]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string,
  P6 extends string, P7 extends string>(ps: [P1, P2, P3, P4, P5, P6, P7]):
  <O extends {[K in P1 | P2 | P3 | P4 | P5 | P6 | P7]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4], O[P5], O[P6], O[P7]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string, P6 extends string>(
  ps: [P1, P2, P3, P4, P5, P6]):
  <O extends {[K in P1 | P2 | P3 | P4 | P5 | P6]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4], O[P5], O[P6]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string>(
  ps: [P1, P2, P3, P4, P5]):
  <O extends {[K in P1 | P2 | P3 | P4 | P5]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4], O[P5]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string>(ps: [P1, P2, P3, P4]):
  <O extends {[K in P1 | P2 | P3 | P4]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string, P2 extends string,
  P3 extends string>(ps: [P1, P2, P3]):
  <O extends {[K in P1 | P2 | P3]: any}>(obj: O) => [O[P1], O[P2], O[P3]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string, P2 extends string>(
  ps: [P1, P2]):
  <O extends {[K in P1 | P2]: any}>(obj: O) => [O[P1], O[P2]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function lensPath<P1 extends string>(ps: [P1]):
  <O extends {[K in P1]: any}>(obj: O) => [O[P1]];


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function props<T>(ps: List<Prop>, obj: List<T>): T[];

// curried


/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 * Note: Tuples are not supported for typings1.
 */
declare function props<T>(ps: List<Prop>): <T>(obj: List<T>) => T[];

export = lensPath 
