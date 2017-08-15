import { List } from './$types';

export function $<T extends List<any>>(suffix: T, list: T): boolean;
