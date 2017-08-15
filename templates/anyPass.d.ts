import { Variadic } from './$types';

export function $<F extends Variadic<boolean>>(fns: F[]): F;
