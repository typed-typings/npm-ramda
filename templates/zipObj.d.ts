import { List, Property } from './$types';

export function $string<T extends string, U>(
  a: List<T>,
  b: List<U>,
): Record<T, U>;
export function $general<U>(a: List<Property>, b: List<U>): Record<string, U>;
