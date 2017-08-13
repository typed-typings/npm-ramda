import { List, Reduced } from './$types';

export function $<T, U>(
  fn: (value: T, accumulator: U) => Reduced<U> | U,
  initial: U,
  values: List<T>,
): U;
