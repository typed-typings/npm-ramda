import { Morphism } from './$types';

export function $<T1, T2, R>(
  a: Morphism<T2, R>,
  b: Morphism<T1, T2>,
  value: T1,
): R;
