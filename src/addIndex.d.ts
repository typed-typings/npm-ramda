import {
  CurriedFunction2,
  CurriedFunction3,
  List
} from '../interfaces'

/**
* Creates a new list iteration function from an existing one by adding two new parameters to its callback
* function: the current index, and the entire list.
*/
declare function addIndex<T, U>(fn: (f: (item: T) => U, list: List<T>) => U[]):
  CurriedFunction2<(item: T, idx: number, list?: List<T>) => U, List<T>, U[]>;
/* Special case for forEach */
declare function addIndex<T>(fn: (f: (item: T) => void, list: List<T>) => T[]):
  CurriedFunction2<(item: T, idx: number, list?: List<T>) => void, List<T>, T[]>;
/* Special case for reduce */
declare function addIndex<T, U>(fn: (f: (acc: U, item: T) => U, aci: U, list: List<T>) => U): 
  CurriedFunction3<(acc: U, item: T, idx: number, list?: List<T>) => U, U, List<T>, U>;

export = addIndex
