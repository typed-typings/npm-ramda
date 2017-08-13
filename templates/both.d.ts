import { Variadic } from './$types';

export function $<F extends Variadic<boolean>>(fn1: F, fn2: F): F;
