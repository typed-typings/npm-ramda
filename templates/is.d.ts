import { Constructor } from './$types';

export function $<T>(constructor: Constructor<T>, value: any): value is T;
