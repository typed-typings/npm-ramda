import { List } from './$types';

export function $string(n: number, str: string): string[];
export function $list<T>(n: number, list: List<T>): T[][];
export function $mixed<T>(n: number, list: string | List<T>): string[] | T[][];
