import { List, Morphism, Tuple } from './$types';

export function $tuple<T, U, N extends number, L extends Tuple>(
  fn: Morphism<T, U>,
  index: N,
  tuple: L,
): T extends U ? (T extends L[N] ? L : never) : never;
export function $list<T, U, N extends number, L extends List<any>>(
  fn: Morphism<T, U>,
  index: N,
  list: L,
): L extends List<T> ? Array<T | U> : never;
export function $allInOne(): any;
