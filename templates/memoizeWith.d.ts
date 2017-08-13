import { Property, Variadic } from './$types';

export function $<T extends Function>(cacheKey: Variadic<Property>, fn: T): T;
