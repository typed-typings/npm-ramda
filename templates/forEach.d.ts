import { List, Tap } from './$types';

export function $<T, U extends List<T>>(fn: Tap<T>, list: U): U;
