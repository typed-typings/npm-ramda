import { TypedVariadic } from './$types';

export function $<T, U>(fns: TypedVariadic<T, U>[]): TypedVariadic<T, U[]>;
