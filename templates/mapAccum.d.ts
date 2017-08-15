import { List } from './$types';

export function $<T, U, R>(
  fn: (accumulator: U, value: T) => [U, R],
  initial: U,
  list: List<T>,
): [U, R[]];
