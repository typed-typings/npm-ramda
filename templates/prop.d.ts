import { List, Property } from './$types';

export function $keyof<T extends {}, K extends keyof T>(
  key: K,
  object: T,
): T[K];
export function $record<K extends string, T extends Record<K, any>>(
  key: K,
  object: T,
): T[K];
export function $general<T>(key: Property, object: {}): T | undefined;
