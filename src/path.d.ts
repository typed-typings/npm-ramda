/**
 * This is auto generated source.
 */

interface Path {
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: T[][][][][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K5 in P5]: T}[][][][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K4 in P4]: T[]}[][][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K4 in P4]: {[K5 in P5]: T}}[][][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K3 in P3]: T[][]}[][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K3 in P3]: {[K5 in P5]: T}[]}[][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K3 in P3]: {[K4 in P4]: T[]}}[][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}[][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K2 in P2]: T[][][]}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K2 in P2]: {[K5 in P5]: T}[][]}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K2 in P2]: {[K4 in P4]: T[]}[]}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K2 in P2]: {[K4 in P4]: {[K5 in P5]: T}}[]}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K2 in P2]: {[K3 in P3]: T[][]}}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K2 in P2]: {[K3 in P3]: {[K5 in P5]: T}[]}}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T[]}}}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: T[][][][]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K5 in P5]: T}[][][]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K4 in P4]: T[]}[][]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K4 in P4]: {[K5 in P5]: T}}[][]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K3 in P3]: T[][]}[]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K3 in P3]: {[K5 in P5]: T}[]}[]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: T[]}}[]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}[]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: T[][][]}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K5 in P5]: T}[][]}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: T[]}[]}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: {[K5 in P5]: T}}[]}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T[][]}}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K5 in P5]: T}[]}}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T[]}}}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5]): {
  <T>(
    obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends number, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: T[][][][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends string, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K4 in P4]: T}[][][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends number, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K3 in P3]: T[]}[][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends string, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K3 in P3]: {[K4 in P4]: T}}[][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends number, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K2 in P2]: T[][]}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends string, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K2 in P2]: {[K4 in P4]: T}[]}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends number, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K2 in P2]: {[K3 in P3]: T[]}}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends string, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends number, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K1 in P1]: T[][][]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends string, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K1 in P1]: {[K4 in P4]: T}[][]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends number, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K1 in P1]: {[K3 in P3]: T[]}[]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends string, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: T}}[]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends number, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: T[][]}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends string, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: T}[]}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends number, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T[]}}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends string, T>(path: [P1, P2, P3, P4]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number, T>(
  path: [P1, P2, P3]): {
     <T>(obj: T[][][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string, T>(
  path: [P1, P2, P3]): {
     <T>(obj: {[K3 in P3]: T}[][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number, T>(
  path: [P1, P2, P3]): {
     <T>(obj: {[K2 in P2]: T[]}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string, T>(
  path: [P1, P2, P3]): {
     <T>(obj: {[K2 in P2]: {[K3 in P3]: T}}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number, T>(
  path: [P1, P2, P3]): {
     <T>(obj: {[K1 in P1]: T[][]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string, T>(
  path: [P1, P2, P3]): {
     <T>(obj: {[K1 in P1]: {[K3 in P3]: T}[]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number, T>(
  path: [P1, P2, P3]): {
     <T>(obj: {[K1 in P1]: {[K2 in P2]: T[]}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string, T>(
  path: [P1, P2, P3]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T}}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, T>(path: [P1, P2]): {
  <T>(obj: T[][]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, T>(path: [P1, P2]): {
  <T>(obj: {[K2 in P2]: T}[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, T>(path: [P1, P2]): {
  <T>(obj: {[K1 in P1]: T[]}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, T>(path: [P1, P2]): {
  <T>(obj: {[K1 in P1]: {[K2 in P2]: T}}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, T>(path: [P1]): {
     <T>(obj: T[]): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, T>(path: [P1]): {
     <T>(obj: {[K1 in P1]: T}): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: T[][][][][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K5 in P5]: T}[][][][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K4 in P4]: T[]}[][][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K4 in P4]: {[K5 in P5]: T}}[][][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K3 in P3]: T[][]}[][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K3 in P3]: {[K5 in P5]: T}[]}[][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K3 in P3]: {[K4 in P4]: T[]}}[][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}[][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K2 in P2]: T[][][]}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K2 in P2]: {[K5 in P5]: T}[][]}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K2 in P2]: {[K4 in P4]: T[]}[]}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K2 in P2]: {[K4 in P4]: {[K5 in P5]: T}}[]}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K2 in P2]: {[K3 in P3]: T[][]}}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K2 in P2]: {[K3 in P3]: {[K5 in P5]: T}[]}}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T[]}}}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: T[][][][]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K5 in P5]: T}[][][]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K4 in P4]: T[]}[][]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K4 in P4]: {[K5 in P5]: T}}[][]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K3 in P3]: T[][]}[]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K3 in P3]: {[K5 in P5]: T}[]}[]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: T[]}}[]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}[]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K2 in P2]: T[][][]}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K2 in P2]: {[K5 in P5]: T}[][]}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: T[]}[]}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: {[K5 in P5]: T}}[]}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends number, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T[][]}}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends number, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K5 in P5]: T}[]}}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends string, P5 extends number, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T[]}}}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends string, P5 extends string, T>(path: [P1, P2, P3, P4, P5],
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends number, T>(path: [P1, P2, P3, P4], obj: T[][][][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number,
  P4 extends string, T>(path: [P1, P2, P3, P4], obj: {[K4 in P4]: T}[][][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends number, T>(path: [P1, P2, P3, P4], obj: {[K3 in P3]: T[]}[][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string,
  P4 extends string, T>(path: [P1, P2, P3, P4],
  obj: {[K3 in P3]: {[K4 in P4]: T}}[][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends number, T>(path: [P1, P2, P3, P4], obj: {[K2 in P2]: T[][]}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number,
  P4 extends string, T>(path: [P1, P2, P3, P4],
  obj: {[K2 in P2]: {[K4 in P4]: T}[]}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends number, T>(path: [P1, P2, P3, P4],
  obj: {[K2 in P2]: {[K3 in P3]: T[]}}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string,
  P4 extends string, T>(path: [P1, P2, P3, P4],
  obj: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends number, T>(path: [P1, P2, P3, P4], obj: {[K1 in P1]: T[][][]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number,
  P4 extends string, T>(path: [P1, P2, P3, P4],
  obj: {[K1 in P1]: {[K4 in P4]: T}[][]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends number, T>(path: [P1, P2, P3, P4],
  obj: {[K1 in P1]: {[K3 in P3]: T[]}[]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string,
  P4 extends string, T>(path: [P1, P2, P3, P4],
  obj: {[K1 in P1]: {[K3 in P3]: {[K4 in P4]: T}}[]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends number, T>(path: [P1, P2, P3, P4],
  obj: {[K1 in P1]: {[K2 in P2]: T[][]}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number,
  P4 extends string, T>(path: [P1, P2, P3, P4],
  obj: {[K1 in P1]: {[K2 in P2]: {[K4 in P4]: T}[]}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends number, T>(path: [P1, P2, P3, P4],
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T[]}}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string,
  P4 extends string, T>(path: [P1, P2, P3, P4],
  obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends number, T>(
  path: [P1, P2, P3], obj: T[][][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, P3 extends string, T>(
  path: [P1, P2, P3], obj: {[K3 in P3]: T}[][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends number, T>(
  path: [P1, P2, P3], obj: {[K2 in P2]: T[]}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, P3 extends string, T>(
  path: [P1, P2, P3], obj: {[K2 in P2]: {[K3 in P3]: T}}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends number, T>(
  path: [P1, P2, P3], obj: {[K1 in P1]: T[][]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, P3 extends string, T>(
  path: [P1, P2, P3], obj: {[K1 in P1]: {[K3 in P3]: T}[]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends number, T>(
  path: [P1, P2, P3], obj: {[K1 in P1]: {[K2 in P2]: T[]}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, P3 extends string, T>(
  path: [P1, P2, P3], obj: {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T}}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends number, T>(path: [P1, P2], obj: T[][]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, P2 extends string, T>(path: [P1, P2],
  obj: {[K2 in P2]: T}[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends number, T>(path: [P1, P2],
  obj: {[K1 in P1]: T[]}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, P2 extends string, T>(path: [P1, P2],
  obj: {[K1 in P1]: {[K2 in P2]: T}}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends number, T>(path: [P1], obj: T[]): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
  */
  <P1 extends string, T>(path: [P1], obj: {[K1 in P1]: T}): T;
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
   * Fallback signature.
  */
  <T>(path: (string | number)[]): {
     (obj: any): T;
  }
  /**
   * Retrieve the value at a given path. 
   * Note: Tuples are not supported by typings. 
   * Max path depth typed is 5.
   * Fallback signature.
  */
  <T>(path: (string | number)[], obj: any): T;
}

declare const path: Path

export = path 
