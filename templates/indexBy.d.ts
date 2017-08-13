import { Dictionary, List, Morphism, Property } from './$types';

export function $<T>(fn: Morphism<T, Property>, list: List<T>): Dictionary<T>;
