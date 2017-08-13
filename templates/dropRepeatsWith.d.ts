import { List, Morphism } from './$types';

export function $<T>(fn: Morphism<T, any>, list: List<T>): T[];
