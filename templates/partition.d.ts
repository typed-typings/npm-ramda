import { Dictionary, List, Predicate } from './$types';

export function $list<T, P extends T>(
  fn: (a: T) => a is P,
  list: List<T>
): [P[], T[]];
export function $list<T>(fn: Predicate<T>, list: List<T>): [T[], T[]];
export function $object<T, U extends Dictionary<T>>(
  fn: Predicate<T>,
  dictionary: U,
): [Partial<U>, Partial<U>];
export function $mixed<T, U extends List<T> | Dictionary<T>>(
  fn: Predicate<T>,
  target: U,
): [T[], T[]] | [Partial<U>, Partial<U>];
