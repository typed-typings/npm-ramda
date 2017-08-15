import { List } from './$types';

export function $<T, U, R>(
  fn: (value: T, accumulator: U) => [R, U],
  initial: U,
  list: List<T>,
): [R[], U];
