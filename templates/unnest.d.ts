import { List } from './$types';

export function $deep<T>(list: List<List<T>>): T[];
export function $shallow<T>(list: List<T>): T[];
export function $mixed<T>(list: List<List<T>> | List<T>): T[];
