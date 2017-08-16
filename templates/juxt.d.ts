import { TypedVariadic } from './$types';

export function $<T, U>(fns: Array<TypedVariadic<T, U>>): TypedVariadic<T, U[]>;
