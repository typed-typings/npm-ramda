import { List, Morphism } from './$types';

export function $<T, U>(fns: Morphism<T, U>[], list: List<T>): U[];
