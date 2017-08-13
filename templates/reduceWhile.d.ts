import { List, Reduced } from './$types';

export function $<T, U>(
  pred: (accumulator: U, value: T) => boolean,
  fn: (accumulator: U, value: T) => Reduced<U> | U,
  initial: U,
  values: List<T>,
): U;
