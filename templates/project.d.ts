import { List, Property } from './$types';

export function $keyof<T, K extends keyof T>(
  keys: List<K>,
  list: List<T>,
): Array<Pick<T, K>>;
export function $record<K extends string, T extends Record<K, any>>(
  keys: List<K>,
  list: List<T>,
): Array<Pick<T, K>>;
export function $general(keys: Property[], object: List<any>): any[];
