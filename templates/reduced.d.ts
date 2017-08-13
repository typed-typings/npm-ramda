import { Reduced } from './$types';

export function $<T>(value: Reduced<T> | T): Reduced<T>;
