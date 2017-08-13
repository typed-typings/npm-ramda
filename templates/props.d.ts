import { List, Property } from './$types';

export function $keyof<T extends {}, K extends keyof T>(
  keys: List<K>,
  object: T,
): T[K][];
export function $record<K extends string, T extends Record<K, any>>(
  keys: List<K>,
  object: T,
): T[K][];
export function $general(keys: Property[], object: {}): any[];
