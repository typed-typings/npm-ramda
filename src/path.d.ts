/**
 * This is auto generated source.
 */

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, T>(path: [P1] & { 1?: void },
  obj: {[K1 in P1]: T}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, T>(path: [P1] & { 1?: void },
  obj: T[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string, T>(
  path: [P1, P2] & { 2?: void }, obj: {[K1 in P1]: {[K2 in P2]: T}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number, T>(
  path: [P1, P2] & { 2?: void }, obj: {[K1 in P1]: T[]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string, T>(
  path: [P1, P2] & { 2?: void }, obj: {[K2 in P2]: T}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number, T>(
  path: [P1, P2] & { 2?: void }, obj: T[][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, T>(path: [P1, P2, P3] & { 3?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T}}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, T>(path: [P1, P2, P3] & { 3?: void },
  obj: {[K1 in P1]: {[K2 in P2]: T[]}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, T>(path: [P1, P2, P3] & { 3?: void },
  obj: {[K1 in P1]: {[K3 in P3]: T}[]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, T>(path: [P1, P2, P3] & { 3?: void },
  obj: {[K1 in P1]: T[][]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, T>(path: [P1, P2, P3] & { 3?: void },
  obj: {[K2 in P2]: {[K3 in P3]: T}}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, T>(path: [P1, P2, P3] & { 3?: void },
  obj: {[K2 in P2]: T[]}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, T>(path: [P1, P2, P3] & { 3?: void },
  obj: {[K3 in P3]: T}[][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, T>(path: [P1, P2, P3] & { 3?: void }, obj: T[][][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T[]}}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: T}[]}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K1 in P1]: {[K2 in P2]: T[][]}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: T}}[]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K1 in P1]: {[K3 in P3]: T[]}[]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K1 in P1]: {[K4 in P4]: T}[][]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }, obj: {[K1 in P1]: T[][][]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K2 in P2]: {[K3 in P3]: T[]}}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K2 in P2]: {[K4 in P4]: T}[]}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }, obj: {[K2 in P2]: T[][]}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void },
  obj: {[K3 in P3]: {[K4 in P4]: T}}[][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }, obj: {[K3 in P3]: T[]}[][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void }, obj: {[K4 in P4]: T}[][][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }, obj: T[][][][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T[]}}}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K5 in P5]: T}[]}}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T[][]}}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: {[K5 in P5]: T}}[]}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: T[]}[]}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K2 in P2]: {[K5 in P5]: T}[][]}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K2 in P2]: T[][][]}}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}[]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: T[]}}[]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K3 in P3]: {[K5 in P5]: T}[]}[]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K3 in P3]: T[][]}[]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K4 in P4]: {[K5 in P5]: T}}[][]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K4 in P4]: T[]}[][]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K1 in P1]: {[K5 in P5]: T}[][][]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }, obj: {[K1 in P1]: T[][][][]}): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T[]}}}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K2 in P2]: {[K3 in P3]: {[K5 in P5]: T}[]}}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K2 in P2]: {[K3 in P3]: T[][]}}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K2 in P2]: {[K4 in P4]: {[K5 in P5]: T}}[]}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K2 in P2]: {[K4 in P4]: T[]}[]}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K2 in P2]: {[K5 in P5]: T}[][]}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }, obj: {[K2 in P2]: T[][][]}[]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}[][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K3 in P3]: {[K4 in P4]: T[]}}[][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K3 in P3]: {[K5 in P5]: T}[]}[][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }, obj: {[K3 in P3]: T[][]}[][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void },
  obj: {[K4 in P4]: {[K5 in P5]: T}}[][][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }, obj: {[K4 in P4]: T[]}[][][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }, obj: {[K5 in P5]: T}[][][][]): T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }, obj: T[][][][][]): T;

// curried

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, T>(path: [P1] & { 1?: void }):
  <T>(obj: {[K1 in P1]: T}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, T>(path: [P1] & { 1?: void }):
  <T>(obj: T[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string, T>(
  path: [P1, P2] & { 2?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: T}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number, T>(
  path: [P1, P2] & { 2?: void }): <T>(obj: {[K1 in P1]: T[]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string, T>(
  path: [P1, P2] & { 2?: void }): <T>(obj: {[K2 in P2]: T}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number, T>(
  path: [P1, P2] & { 2?: void }): <T>(obj: T[][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, T>(path: [P1, P2, P3] & { 3?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T}}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, T>(path: [P1, P2, P3] & { 3?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: T[]}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, T>(path: [P1, P2, P3] & { 3?: void }):
  <T>(obj: {[K1 in P1]: {[K3 in P3]: T}[]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, T>(path: [P1, P2, P3] & { 3?: void }):
  <T>(obj: {[K1 in P1]: T[][]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, T>(path: [P1, P2, P3] & { 3?: void }):
  <T>(obj: {[K2 in P2]: {[K3 in P3]: T}}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, T>(path: [P1, P2, P3] & { 3?: void }):
  <T>(obj: {[K2 in P2]: T[]}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, T>(path: [P1, P2, P3] & { 3?: void }):
  <T>(obj: {[K3 in P3]: T}[][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, T>(path: [P1, P2, P3] & { 3?: void }):
  <T>(obj: T[][][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T[]}}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: T}[]}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: T[][]}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: T}}[]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K1 in P1]: {[K3 in P3]: T[]}[]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K1 in P1]: {[K4 in P4]: T}[][]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K1 in P1]: T[][][]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K2 in P2]: {[K3 in P3]: T[]}}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K2 in P2]: {[K4 in P4]: T}[]}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K2 in P2]: T[][]}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K3 in P3]: {[K4 in P4]: T}}[][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K3 in P3]: T[]}[][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends string, T>(
  path: [P1, P2, P3, P4] & { 4?: void }):
  <T>(obj: {[K4 in P4]: T}[][][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }): <T>(obj: T[][][][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T[]}}}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K5 in P5]: T}[]}}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends string, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T[][]}}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: {[K5 in P5]: T}}[]}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: T[]}[]}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K5 in P5]: T}[][]}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends string,
  P3 extends number, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K2 in P2]: T[][][]}}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}[]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: T[]}}[]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K3 in P3]: {[K5 in P5]: T}[]}[]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends string, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K3 in P3]: T[][]}[]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K4 in P4]: {[K5 in P5]: T}}[][]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K4 in P4]: T[]}[][]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: {[K5 in P5]: T}[][][]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends string, P2 extends number,
  P3 extends number, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K1 in P1]: T[][][][]}) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T[]}}}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K2 in P2]: {[K3 in P3]: {[K5 in P5]: T}[]}}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends string, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K2 in P2]: {[K3 in P3]: T[][]}}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K2 in P2]: {[K4 in P4]: {[K5 in P5]: T}}[]}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K2 in P2]: {[K4 in P4]: T[]}[]}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K2 in P2]: {[K5 in P5]: T}[][]}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends string,
  P3 extends number, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K2 in P2]: T[][][]}[]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}[][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K3 in P3]: {[K4 in P4]: T[]}}[][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K3 in P3]: {[K5 in P5]: T}[]}[][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends string, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K3 in P3]: T[][]}[][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends string, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K4 in P4]: {[K5 in P5]: T}}[][][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends string, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K4 in P4]: T[]}[][][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends number, P5 extends string, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }):
  <T>(obj: {[K5 in P5]: T}[][][][]) => T;

/**
 * Retrieve the value at a given path. 
 * Note: Nested tuples are not supported for typings. 
 * Max path depth typed is 5.
 */
declare function path<P1 extends number, P2 extends number,
  P3 extends number, P4 extends number, P5 extends number, T>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }): <T>(obj: T[][][][][]) => T;

export = path
