import { Ordered } from './$types';

export function $<T extends Ordered>(a: T, b: T): T;
