import { Chain, List, Morphism, NestedMorphism } from './$types';

export function $list<T, U>(fn: Morphism<T, List<U>>, list: List<T>): U[];
export function $chain<T, U>(
  fn: Morphism<T, Chain<U>>,
  list: Chain<T>,
): Chain<U>;
export function $listFn<T, U, V>(
  fn: NestedMorphism<V, List<T>, U>,
  monad: Morphism<List<T>, V>,
): Morphism<List<T>, U>;
export function $chainFn<T, U, V>(
  fn: NestedMorphism<V, Chain<T>, Chain<U>>,
  monad: Morphism<Chain<T>, V>,
): Morphism<Chain<T>, Chain<U>>;
export function $mixed<T, U, V>(
  fn:
    | Morphism<T, List<U>>
    | Morphism<T, Chain<U>>
    | NestedMorphism<V, List<T>, U>
    | NestedMorphism<V, Chain<T>, Chain<U>>,
  monad: List<T> | Chain<T> | Morphism<List<T>, V> | Morphism<Chain<T>, V>,
): Morphism<List<T>, U> | Morphism<Chain<T>, Chain<U>>;
