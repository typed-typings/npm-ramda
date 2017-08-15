import { List } from './$types';

export function $string(str: string): string;
export function $general<T extends List<any>>(list: T): T[number] | undefined;
