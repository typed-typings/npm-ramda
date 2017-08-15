import { Applicative, List, Morphism, Traversable } from './$types';

export function $list<T>(
  of: Morphism<T, Applicative<T>>,
  traversable: List<Applicative<T>>,
): Applicative<T[]>;
export function $traversable<T>(
  of: Morphism<T, Applicative<T>>,
  traversable: Traversable<Applicative<T>>,
): Applicative<Traversable<T>>;
export function $mixed<T>(
  of: Morphism<T, Applicative<T>>,
  traversable: List<Applicative<T>> | Traversable<Applicative<T>>,
): Applicative<T[]> | Applicative<Traversable<T>>;
