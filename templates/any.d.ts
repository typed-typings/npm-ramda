import { List, Predicate } from './$types';

export function $<T>(fn: Predicate<T>, list: List<T>): boolean;
