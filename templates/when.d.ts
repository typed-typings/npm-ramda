import { Morphism, Predicate } from './$types';

export function $<T, U>(
  pred: Predicate<T>,
  whenTrueFn: Morphism<T, U>,
  value: T,
): T | U;
