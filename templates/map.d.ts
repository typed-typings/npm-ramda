import { Functor, List, Morphism, Tuple } from './$types';

export function $list<T, U>(fn: Morphism<T, U>, list: List<T>): U[];
export function $tuple<T, U, O extends Tuple>(
  fn: Morphism<T, U>,
  tuple: O,
): T extends U ? (T extends O[number] ? O : never) : never;
export function $functor<T, U, O extends Functor<any>>(
  fn: Morphism<T, U>,
  functor: O,
): O extends Functor<T> ? Functor<U> : never;
export function $object<T, U, O extends Record<string, any>>(
  fn: Morphism<T, U>,
  object: O,
): O extends Record<infer K, T> ? Record<K, U> : never;
export function $allInOne<
  T,
  U,
  O extends List<any> | Tuple | Functor<any> | Record<string, any>
>(
  fn: Morphism<T, U>,
  target: O,
): O extends Tuple
  ? T extends U ? (T extends O[number] ? O : never) : never
  : O extends List<T>
    ? U[]
    : O extends Functor<T>
      ? Functor<U>
      : O extends Record<infer K, T> ? Record<K, U> : never;
