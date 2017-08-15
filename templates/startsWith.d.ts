import { List } from './$types';

export function $<T extends List<any>>(prefix: T, list: T): boolean;
