import { List } from './$types';

export function $string(str: string): string;
export function $tuple<T extends [any]>(list: T): T[0];
export function $general<T extends List<any>>(list: T): T[0] | undefined;
