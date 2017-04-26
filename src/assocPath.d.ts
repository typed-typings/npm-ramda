/**
 * This is auto generated source.
 */

import { Path } from '../interfaces';

interface AssocPath {
  /**
   * Makes a shallow clone of an object, setting or overriding 
   * the nodes required to create the given path, and placing the specific 
   * value at the tail end of that path.
   * Note: Tuples are not supported by typings.
   * Max path depth typed is 5.
  */
  <P1 extends string | number, T, O extends {[K1 in P1]: T}>(
  path: [P1] & { 1?: void }, value: T, obj: O): O;
  /**
   * Makes a shallow clone of an object, setting or overriding 
   * the nodes required to create the given path, and placing the specific 
   * value at the tail end of that path.
   * Note: Tuples are not supported by typings.
   * Max path depth typed is 5.
  */
  <P1 extends string | number, P2 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: T}}>(path: [P1, P2] & { 2?: void },
  value: T, obj: O): O;
  /**
   * Makes a shallow clone of an object, setting or overriding 
   * the nodes required to create the given path, and placing the specific 
   * value at the tail end of that path.
   * Note: Tuples are not supported by typings.
   * Max path depth typed is 5.
  */
  <P1 extends string | number, P2 extends string | number,
  P3 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T}}}>(
  path: [P1, P2, P3] & { 3?: void }, value: T, obj: O): O;
  /**
   * Makes a shallow clone of an object, setting or overriding 
   * the nodes required to create the given path, and placing the specific 
   * value at the tail end of that path.
   * Note: Tuples are not supported by typings.
   * Max path depth typed is 5.
  */
  <P1 extends string | number, P2 extends string | number,
  P3 extends string | number, P4 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}}>(
  path: [P1, P2, P3, P4] & { 4?: void }, value: T, obj: O): O;
  /**
   * Makes a shallow clone of an object, setting or overriding 
   * the nodes required to create the given path, and placing the specific 
   * value at the tail end of that path.
   * Note: Tuples are not supported by typings.
   * Max path depth typed is 5.
  */
  <P1 extends string | number, P2 extends string | number,
  P3 extends string | number, P4 extends string | number,
  P5 extends string | number, T,
  O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}}>(
  path: [P1, P2, P3, P4, P5] & { 5?: void }, value: T, obj: O): O;
  <P1 extends string | number, T>(path: [P1] & { 1?: void }, value: T): {
  <O extends {[K1 in P1]: T}>(obj: O): O;
  }
  <P1 extends string | number, P2 extends string | number, T>(
  path: [P1, P2] & { 2?: void }, value: T): {
  <O extends {[K1 in P1]: {[K2 in P2]: T}}>(obj: O): O;
  }
  <P1 extends string | number, P2 extends string | number,
  P3 extends string | number, T>(path: [P1, P2, P3] & { 3?: void }, value: T): {
  <O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T}}}>(obj: O): O;
  }
  <P1 extends string | number, P2 extends string | number,
  P3 extends string | number, P4 extends string | number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }, value: T): {
  <O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}}>(
    obj: O): O;
  }
  <P1 extends string | number, P2 extends string | number,
  P3 extends string | number, P4 extends string | number,
  P5 extends string | number, T>(path: [P1, P2, P3, P4, P5] & { 5?: void },
  value: T): {
  <
    O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}}>(
    obj: O): O;
  }
  <P1 extends string | number, T>(path: [P1] & { 1?: void }): {
  <T>(value: T): {
       <O extends {[K1 in P1]: T}>(obj: O): O;
    }
    <T, O extends {[K1 in P1]: T}>(value: T, obj: O): O;
  }
  <P1 extends string | number, P2 extends string | number, T>(
  path: [P1, P2] & { 2?: void }): {
  <T>(value: T): {
    <O extends {[K1 in P1]: {[K2 in P2]: T}}>(obj: O): O;
    }
    <T, O extends {[K1 in P1]: {[K2 in P2]: T}}>(value: T, obj: O): O;
  }
  <P1 extends string | number, P2 extends string | number,
  P3 extends string | number, T>(path: [P1, P2, P3] & { 3?: void }): {
  <T>(value: T): {
    <O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T}}}>(obj: O): O;
    }
    <T, O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: T}}}>(value: T,
    obj: O): O;
  }
  <P1 extends string | number, P2 extends string | number,
  P3 extends string | number, P4 extends string | number, T>(
  path: [P1, P2, P3, P4] & { 4?: void }): {
  <T>(value: T): {
    <O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}}>(
      obj: O): O;
    }
    <T, O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: T}}}}>(
    value: T, obj: O): O;
  }
  <P1 extends string | number, P2 extends string | number,
  P3 extends string | number, P4 extends string | number,
  P5 extends string | number, T>(path: [P1, P2, P3, P4, P5] & { 5?: void }): {
  <T>(value: T): {
    <
      O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}}>(
      obj: O): O;
    }
    <T,
    O extends {[K1 in P1]: {[K2 in P2]: {[K3 in P3]: {[K4 in P4]: {[K5 in P5]: T}}}}}>(
    value: T, obj: O): O;
  }
}

declare const assocPath: AssocPath

export = assocPath
