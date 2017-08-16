import { Comparator, List } from './$types';

export function $<T>(fns: Array<Comparator<T, number>>, list: List<T>): T[];
