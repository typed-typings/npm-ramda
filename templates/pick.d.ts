import { List, Property } from './$types';

export function $keyof<T extends {}, K extends keyof T>(
  keys: List<K>,
  object: T,
): Pick<T, K>;
export function $record<U extends Record<V, any>, V extends string>(
  keys: List<V>,
  object: U,
): Pick<U, V>;
export function $general<T extends {}>(
  keys: List<Property>,
  object: T,
): Partial<T>;
