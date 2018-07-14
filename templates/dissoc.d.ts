import { Omit } from './$operation';
import { Property } from './$types';

export function $keyof<T extends object, K extends keyof T>(
  property: K,
  object: T,
): Omit<T, K>;
export function $record<U extends Record<V, any>, V extends PropertyKey>(
  property: V,
  object: U,
): Omit<U, V>;
export function $general<T extends object>(property: Property, object: T): T;
