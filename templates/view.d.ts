import { ManualLens, PseudoLens } from './$types';

export function $number<N extends number, U extends { [index: number]: any }>(
  lens: PseudoLens<N>,
  target: U,
): U[N];
export function $string<K extends string, U extends Record<K, any>>(
  lens: PseudoLens<K>,
  target: U,
): U[K];
export function $manual<T, U>(lens: ManualLens<T, U>, target: U): T;
export function $general<X, V>(
  lens: PseudoLens<any> | ManualLens<X, V>,
  target: V,
): X | V[any];
