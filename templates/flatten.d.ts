import { Flatten } from './$operation';
import { List } from './$types';

export function $<T extends List<any>>(list: T): Array<Flatten<T>>;
