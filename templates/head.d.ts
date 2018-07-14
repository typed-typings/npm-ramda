import { List, Tuple } from './$types';

export function $string(str: string): string;
export function $tuple<T extends Tuple>(list: T): T[0];
export function $general<T extends List<any>>(list: T): T[0] | undefined;
