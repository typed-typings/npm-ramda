import { Comparator, List } from './$types';

export function $<T>(fn: Comparator<T, boolean>, list: List<T>): T[];
