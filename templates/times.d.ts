import { Morphism } from './$types';

export function $<T>(fn: Morphism<number, T>, n: number): T[];
