import { List, Property } from './$types';

export function $list<U>(index: number, list: List<List<U>>): U[];
export function $keyof<T, K extends keyof T>(
  key: K,
  list: List<T>,
): Array<T[K]>;
export function $record<K extends string, V, T extends Record<K, V>>(
  key: K,
  list: List<T>,
): Array<T[K]>;
export function $general(key: Property, list: List<any>): any[];
