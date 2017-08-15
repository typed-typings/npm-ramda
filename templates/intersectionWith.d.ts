import { Comparator, List } from './$types';

export function $<T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): T[];
