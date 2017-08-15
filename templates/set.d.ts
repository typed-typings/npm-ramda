import { NumberToString } from './$operation';
import { ManualLens, PseudoLens } from './$types';

export function $number<N extends number, U extends { [index: number]: any }>(
  lens: PseudoLens<N>,
  value: U[NumberToString[N]],
  target: U,
): U;
export function $string<K extends string, U extends Record<K, any>>(
  lens: PseudoLens<K>,
  value: U[K],
  target: U,
): U;
export function $manual<T, U>(lens: ManualLens<T, U>, value: T, target: U): U;
export function $general<V>(
  lens: PseudoLens<any> | ManualLens<any, V>,
  fn: any,
  target: V,
): V;
