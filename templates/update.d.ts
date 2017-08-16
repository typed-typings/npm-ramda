import { List } from './$types';

export function $<T, U>(index: number, value: T, list: List<U>): Array<T | U>;
