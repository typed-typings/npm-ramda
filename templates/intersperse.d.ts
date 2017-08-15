import { List } from './$types';

export function $<T, U>(separator: T, list: List<U>): (T | U)[];
