import { Property } from './$types';

export function $<T>(keys: Property[], object: T): Partial<T>;
