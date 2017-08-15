import { Ordered } from './$types';

export function $<T extends Ordered>(min: T, max: T, value: T): T;
