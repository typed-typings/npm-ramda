import { Comparator, List } from './$types';

export function $<T, U extends List<T>>(
  fn: Comparator<T, boolean>,
  list: U,
): U[];
