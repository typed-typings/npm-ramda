import { List } from './$types';

export function $string(index: number, str: string): [string, string];
export function $list<T>(index: number, list: List<T>): [T[], T[]];
export function $mixed<T>(
  index: number,
  list: string | List<T>,
): [string, string] | [T[], T[]];
