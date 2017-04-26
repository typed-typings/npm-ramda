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
  <T, O>(path: Path, val: T, obj: O): O;
  /**
   * Makes a shallow clone of an object, setting or overriding 
   * the nodes required to create the given path, and placing the specific 
   * value at the tail end of that path.
   * Note: Tuples are not supported by typings.
   * Max path depth typed is 5.
  */
  <T>(path: Path, val: T): {
     <O>(obj: O): O;
  }
  (path: Path): {
  <T, O>(val: T, obj: O): O;
    <T>(val: T): {
       <O>(obj: O): O;
    }
  }
}

declare const assocPath: AssocPath

export = assocPath 
