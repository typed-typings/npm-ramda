import { List } from './$types';

export function $<T, U, R>(fn: (x: T, y: U) => R, a: List<T>, b: List<U>): R[];
