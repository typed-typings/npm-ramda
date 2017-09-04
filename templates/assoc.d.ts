import { Property } from './$types';

export function $extend<K extends string, V, T extends object>(
  property: K,
  value: V,
  object: T,
): T & Record<K, V>;
export function $general<T extends object>(
  property: Property,
  value: any,
  object: T,
): T;
