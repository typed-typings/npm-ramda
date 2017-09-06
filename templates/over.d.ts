import { ManualLens, Morphism, PseudoLens } from './$types';

export function $number<N extends number, U extends { [index: number]: any }>(
  lens: PseudoLens<N>,
  fn: Morphism<U[N], U[N]>,
  target: U,
): U;
export function $string<K extends string, U extends Record<K, any>>(
  lens: PseudoLens<K>,
  fn: Morphism<U[K], U[K]>,
  target: U,
): U;
export function $manual<T, U>(
  lens: ManualLens<T, U>,
  fn: Morphism<T, T>,
  target: U,
): U;
export function $general<X, V>(
  lens: PseudoLens<any> | ManualLens<any, V>,
  fn: Morphism<X, X>,
  target: V,
): V;
