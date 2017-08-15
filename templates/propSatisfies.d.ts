import { Predicate, Property } from './$types';

export function $keyof<T extends {}, K extends keyof T>(
  fn: Predicate<T[K]>,
  key: K,
  object: T,
): boolean;
export function $record<K extends string, T extends Record<K, any>>(
  fn: Predicate<T[K]>,
  key: K,
  object: T,
): boolean;
export function $general<V>(
  fn: Predicate<V>,
  key: Property,
  object: {},
): boolean;
