import { List, Morphism } from './$types';

export function $<T, U>(
  fn: Morphism<T, U>,
  index: number,
  list: List<T>,
): Array<T | U>;
