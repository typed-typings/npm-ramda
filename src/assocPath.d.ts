/**
 * This is auto generated source.
 */

import { Path, List, Prop } from '../interfaces';


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string | number,
  P2 extends string | number, P3 extends string | number,
  P4 extends string | number, P5 extends string | number,
  P6 extends string | number, P7 extends string | number,
  P8 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: {[K6 in P6]: {[K7 in P7]: {[K8 in P8]: T}}}}}}}}>(
  path: [P1, P2, P3, P4, P5, P6, P7, P8], value: T, obj: O): O;


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string | number,
  P2 extends string | number, P3 extends string | number,
  P4 extends string | number, P5 extends string | number,
  P6 extends string | number, P7 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: {[K6 in P6]: {[K7 in P7]: T}}}}}}}>(
  path: [P1, P2, P3, P4, P5, P6, P7], value: T, obj: O): O;


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string | number,
  P2 extends string | number, P3 extends string | number,
  P4 extends string | number, P5 extends string | number,
  P6 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: {[K6 in P6]: T}}}}}}>(
  path: [P1, P2, P3, P4, P5, P6], value: T, obj: O): O;


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string | number,
  P2 extends string | number, P3 extends string | number,
  P4 extends string | number, P5 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}}>(
  path: [P1, P2, P3, P4, P5], value: T, obj: O): O;


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string | number,
  P2 extends string | number, P3 extends string | number,
  P4 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}}>(
  path: [P1, P2, P3, P4], value: T, obj: O): O;


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string | number,
  P2 extends string | number, P3 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T}}}>(
  path: [P1, P2, P3], value: T, obj: O): O;


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string | number,
  P2 extends string | number, T, O extends {[K1 in P1]: {[K2 in P2]: T}}>(
  path: [P1, P2], value: T, obj: O): O;


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string | number, T,
  O extends {[K1 in P1]: T}>(path: [P1], value: T, obj: O): O;

// curried


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string,
  P6 extends string, P7 extends string, P8 extends string>(
  ps: [P1, P2, P3, P4, P5, P6, P7, P8]):
  <O extends {[K in P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4], O[P5], O[P6], O[P7], O[P8]];


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string,
  P6 extends string, P7 extends string>(ps: [P1, P2, P3, P4, P5, P6, P7]):
  <O extends {[K in P1 | P2 | P3 | P4 | P5 | P6 | P7]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4], O[P5], O[P6], O[P7]];


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string, P6 extends string>(
  ps: [P1, P2, P3, P4, P5, P6]):
  <O extends {[K in P1 | P2 | P3 | P4 | P5 | P6]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4], O[P5], O[P6]];


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string>(
  ps: [P1, P2, P3, P4, P5]):
  <O extends {[K in P1 | P2 | P3 | P4 | P5]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4], O[P5]];


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string>(ps: [P1, P2, P3, P4]):
  <O extends {[K in P1 | P2 | P3 | P4]: any}>(obj: O) =>
  [O[P1], O[P2], O[P3], O[P4]];


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string, P2 extends string,
  P3 extends string>(ps: [P1, P2, P3]):
  <O extends {[K in P1 | P2 | P3]: any}>(obj: O) => [O[P1], O[P2], O[P3]];


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string, P2 extends string>(
  ps: [P1, P2]):
  <O extends {[K in P1 | P2]: any}>(obj: O) => [O[P1], O[P2]];


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function assocPath<P1 extends string>(ps: [P1]):
  <O extends {[K in P1]: any}>(obj: O) => [O[P1]];


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function props<T>(ps: List<Prop>, obj: List<T>): T[];

// curried


/**
 * Makes a shallow clone of an object, setting or overriding 
 * the nodes required to create the given path, and placing the specific 
 * value at the tail end of that path.
 * 
 * Note: Tuples are not supported for typings.
 */
declare function props<T>(ps: List<Prop>): <T>(obj: List<T>) => T[];

export = assocPath
