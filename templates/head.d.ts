import { List, Tuple } from './$types';

export function $string<T extends string>(str: T): string;
export function $tuple<T extends Tuple>(tuple: T): T[0];
export function $list<T extends List<any>>(list: T): T[number] | undefined;
export function $allInOne(): any;
