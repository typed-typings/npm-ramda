import { KeyValuePair, Property } from './$types';

export function $<K extends Property, V>(key: K, value: V): KeyValuePair<K, V>;
