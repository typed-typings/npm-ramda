import { Morphism, Ordered } from './$types';

export function $<T>(fn: Morphism<T, Ordered>, a: T, b: T): T;
