import { List } from './$types';

export function $<T, U>(
  pred: (a: T, b: U) => boolean,
  xs: List<T>,
  ys: List<U>,
): T[];
