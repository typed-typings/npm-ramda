import { Morphism } from './$types';

export function $<T>(fn: Morphism<T, any>, a: T, b: T): boolean;
