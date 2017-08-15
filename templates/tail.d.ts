import { List } from './$types';

export function $string(str: string): string;
export function $list<T>(list: List<T>): T[];
export function $mixed<T>(list: string | List<T>): string | T[];
