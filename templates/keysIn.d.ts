import { KeyOf } from './$operation';

export function $<T>(object: T): Array<KeyOf<T>>;
