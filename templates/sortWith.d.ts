import { Comparator, List } from './$types';

export function $<T>(fns: Comparator<T, number>[], list: List<T>): T[];
