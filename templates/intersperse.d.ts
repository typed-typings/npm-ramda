import { List } from './$types';

export function $<T, U>(separator: T, list: List<U>): Array<T | U>;
