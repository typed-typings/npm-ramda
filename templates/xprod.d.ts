import { List } from './$types';

export function $<T, U>(a: List<T>, b: List<U>): Array<[T, U]>;
