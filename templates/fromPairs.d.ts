import { Dictionary, KeyValuePair, List, Property } from './$types';

export function $<T>(pairs: List<KeyValuePair<Property, T>>): Dictionary<T>;
