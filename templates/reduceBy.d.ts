import { List, Morphism, Reduced } from './$types';

export function $<T, U, K extends string>(
  valueFn: (accumulator: U, value: T) => Reduced<U> | U,
  initial: U,
  keyFn: Morphism<T, K>,
  values: List<T>,
): Partial<Record<K, U>>;
