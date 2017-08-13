import { List } from './$types';

export function $string(n: number, str: string): string;
export function $general<T extends List<any>>(
  n: number,
  list: T,
): T[number] | undefined;
