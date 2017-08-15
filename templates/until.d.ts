import { Morphism, Predicate } from './$types';

export function $<T>(pred: Predicate<T>, fn: Morphism<T, T>, initial: T): T;
