import { Property } from './$types';

export function $extend<K extends string, V, T extends {}>(
  property: K,
  value: V,
  object: T,
): T & Record<K, V>;
export function $general<T extends {}>(
  property: Property,
  value: any,
  object: T,
): T;
