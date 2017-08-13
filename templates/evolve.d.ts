import { Evolver } from './$operation';

export function $<T, U extends T>(transformations: Evolver<T>, object: U): U;
