import { Applicative, List, Morphism, Traversable } from './$types';

export function $list<T, U>(
  of: Morphism<T, Applicative<T>>,
  fn: Morphism<T, Applicative<U>>,
  traversable: List<T>,
): Applicative<U[]>;
export function $traversable<T, U>(
  of: Morphism<T, Applicative<T>>,
  fn: Morphism<T, Applicative<U>>,
  traversable: Traversable<T>,
): Applicative<Traversable<U>>;
export function $mixed<T, U>(
  of: Morphism<T, Applicative<T>>,
  fn: Morphism<T, Applicative<U>>,
  traversable: List<T> | Traversable<T>,
): Applicative<U[]> | Applicative<Traversable<U>>;
