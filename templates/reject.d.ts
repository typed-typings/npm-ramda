import { Dictionary, Filterable, List, Predicate } from './$types';

export function $list<T>(fn: Predicate<T>, list: List<T>): T[];
export function $filterable<T, U extends Filterable<T>>(
  fn: Predicate<T>,
  filterable: U,
): U;
export function $object<T, U extends Dictionary<T>>(
  fn: Predicate<T>,
  object: U,
): Partial<U>;
export function $mixed<T, U extends List<T> | Filterable<T> | Dictionary<T>>(
  fn: Predicate<T>,
  target: U,
): T[] | U | Partial<U>;
