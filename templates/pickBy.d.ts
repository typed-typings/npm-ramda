import { Dictionary, KeyedObjectMorphism } from './$types';

export function $<T extends {}, U extends Dictionary<T>>(
  fn: KeyedObjectMorphism<T, boolean, keyof U>,
  object: U,
): Partial<U>;
