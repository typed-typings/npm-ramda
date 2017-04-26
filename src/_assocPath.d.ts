/**
 * This is auto generated source.
 */

import { Path } from '../interfaces'

interface assocPath {
  /**
   * 1Returns a new function much like the supplied one, except that the first two arguments'
   * order is reversed.
   */  
  <T, U>(path: Path, val: T, obj: U): U;
  /**
   * 2Returns a new function much like the supplied one, except that the first two arguments'
   * order is reversed.
   */    
  <T>(path: Path, val: T): {
    <U>(obj: U): U;
  };
  /**
   * 3Returns a new function much like the supplied one, except that the first two arguments'
   * order is reversed.
   */  

  (path: Path): {
    /**
     * 4Returns a new function much like the supplied one, except that the first two arguments'
     * order is reversed.
     */  
    <T, U>(val: T, obj: U): U;
    <T>(val: T): {
      <U>(obj: U): U;
    };
  };
}
declare const x: assocPath

export = x
