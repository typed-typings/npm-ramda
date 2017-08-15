import { Comparator } from './$types';

export function $<T>(fn: Comparator<T, boolean>): Comparator<T, number>;
