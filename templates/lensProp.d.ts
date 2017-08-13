import { ManualLens, Property, PseudoLens } from './$types';

export function $key<K extends string | number>(property: K): PseudoLens<K>;
export function $general<T, U>(property: Property): ManualLens<T, U>;
