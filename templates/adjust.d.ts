import { List, Morphism } from './$types';

export function $list<T, U>(
  fn: Morphism<T, U>,
  index: number,
  list: List<T>,
): Array<T | U>;

export function $tuple<N extends number, X extends [any]>(
  fn: Morphism<X[N], X[N]>,
  index: N,
  tuple: X,
): X;

export function $general<T, U, X extends [any]>(
  fn: Morphism<T, U>,
  index: number,
  list: List<T> | X,
): Array<T | U> | X;
