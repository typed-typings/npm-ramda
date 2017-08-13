import { KeyedObjectMorphism } from './$types';

export function $<T, U, K extends string>(
  fn: KeyedObjectMorphism<T, U, K>,
  object: Record<K, T>,
): Record<K, U>;
