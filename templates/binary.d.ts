import { Variadic } from './$types';

export function $base<T, U, R>(
  fn: (a: T, b: U, ...args: any[]) => R,
): (a: T, b: U) => R;
export function $variadic<R>(fn: Variadic<R>): (a: any, b: any) => R;
