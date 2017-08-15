import { Comparator, List } from './$types';

export function $<T>(fn: Comparator<T, number>, list: List<T>): T[];
