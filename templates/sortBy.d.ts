import { List, Morphism, Ordered } from './$types';

export function $<T>(fn: Morphism<T, Ordered>, list: List<T>): T[];
