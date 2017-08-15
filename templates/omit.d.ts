import { List, Property } from './$types';

export function $<T>(keys: List<Property>, object: T): Partial<T>;
