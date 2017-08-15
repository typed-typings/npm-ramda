import { Morphism, Predicate } from './$types';

export function $predicate<T, U, V extends T>(
  pred: (value: T) => value is V,
  whenFalseFn: Morphism<T, U>,
  value: T,
): V | U;
export function $general<T, U>(
  pred: Predicate<T>,
  whenFalseFn: Morphism<T, U>,
  value: T,
): T | U;
