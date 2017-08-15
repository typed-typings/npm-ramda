import { Variadic } from './$types';

export function $base<T, R>(fn: (a: T, ...args: any[]) => R): (a: T) => R;
export function $variadic<R>(fn: Variadic<R>): (a: any) => R;
