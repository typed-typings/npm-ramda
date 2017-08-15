import { NestedDictionary, Variadic } from './$types';

export function $<T>(spec: NestedDictionary<Variadic<any>>): Variadic<T>;
