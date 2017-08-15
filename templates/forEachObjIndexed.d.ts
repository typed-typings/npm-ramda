import { Dictionary, KeyedObjectTap } from './$types';

export function $<T, U extends Dictionary<T>>(
  fn: KeyedObjectTap<T, U>,
  list: U,
): U;
