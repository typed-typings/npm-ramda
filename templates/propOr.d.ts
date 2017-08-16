import { Property } from './$types';

export function $keyof<D, T extends {}, K extends keyof T>(
  defaults: D,
  key: K,
  object: T,
): T[K] | D;
export function $record<D, K extends string, T extends Record<K, any>>(
  defaults: D,
  key: K,
  object: T,
): T[K] | D;
export function $general<T, U>(defaults: T, key: Property, object: {}): T | U;
