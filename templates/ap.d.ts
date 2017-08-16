import { List, Morphism } from './$types';

export function $<T, U>(fns: Array<Morphism<T, U>>, list: List<T>): U[];
