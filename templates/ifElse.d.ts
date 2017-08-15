import { Morphism, Predicate } from './$types';

export function $<T, U, V>(
  pred: Predicate<T>,
  onTrue: Morphism<T, U>,
  onFalse: Morphism<T, V>,
): Morphism<T, U | V>;
