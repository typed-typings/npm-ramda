import { List, Tuple } from './$types';

export function $string(str: string): string;
export function $tuple<T extends Tuple>(tuple: T): T[0];
export function $list<T extends List<any>>(list: T): T[number] | undefined;
export function $allInOne<T extends Tuple | List<any>>(
  list: T,
): T extends string ? string : T extends Tuple ? T[0] : T[number] | undefined;
