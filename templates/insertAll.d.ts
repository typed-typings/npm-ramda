import { List } from './$types';

export function $<T, U>(
  index: number,
  values: List<T>,
  list: List<U>,
): (T | U)[];
