/**
 * This is auto generated source.
 */

type NestedArray5<T> = (T | (T | (T | (T | (T | T[])[])[])[])[])[];
type NestedArray4<T> = (T | (T | (T | (T | T[])[])[])[])[];
type NestedArray3<T> = (T | (T | (T | T[])[])[])[];
type NestedArray2<T> = (T | (T | T[])[])[];
type NestedArray1<T> = (T | T[])[];

/**
 * Returns a new list by pulling every item out 
 * of it (and all its sub-arrays) and putting them in a new array, depth-first.
 */
declare function flatten<T>(list: NestedArray5<T>): T[];

/**
 * Returns a new list by pulling every item out 
 * of it (and all its sub-arrays) and putting them in a new array, depth-first.
 */
declare function flatten<T>(list: NestedArray4<T>): T[];

/**
 * Returns a new list by pulling every item out 
 * of it (and all its sub-arrays) and putting them in a new array, depth-first.
 */
declare function flatten<T>(list: NestedArray3<T>): T[];

/**
 * Returns a new list by pulling every item out 
 * of it (and all its sub-arrays) and putting them in a new array, depth-first.
 */
declare function flatten<T>(list: NestedArray2<T>): T[];

/**
 * Returns a new list by pulling every item out 
 * of it (and all its sub-arrays) and putting them in a new array, depth-first.
 */
declare function flatten<T>(list: NestedArray1<T>): T[];

export = flatten 
