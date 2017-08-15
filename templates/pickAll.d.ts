import { List, Property } from './$types';

export function $pick<T extends {}, K extends keyof T>(
  keys: List<K>,
  object: T,
): Pick<T, K>;
export function $general<T extends {}>(
  keys: List<Property>,
  object: T,
): Partial<T>;
