import { List } from './$types';

export function $string(from: number, to: number, str: string): string;
export function $list<T>(from: number, to: number, list: List<T>): T[];
export function $mixed<T>(
  from: number,
  to: number,
  list: string | List<T>,
): string | T[];
