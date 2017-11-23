import { Omit } from './$operation';
import { List, Property } from './$types';

export function $string<T, K extends keyof T>(
  key: List<K>,
  object: T,
): Omit<T, K>;
export function $general<T>(keys: List<Property>, object: T): Partial<T>;
