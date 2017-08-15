import { List, Reduced } from './$types';

export function $<T, U>(
  fn: (accumulator: U, value: T) => Reduced<U> | U,
  initial: U,
  values: List<T>,
): U[];
