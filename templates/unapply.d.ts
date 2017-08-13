import { Variadic } from './$types';

export function $<T>(fn: (args: any[]) => T): Variadic<T>;
