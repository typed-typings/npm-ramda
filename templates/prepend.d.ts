import { List } from './$types';

export function $<T, U>(value: T, list: List<U>): Array<T | U>;
