import { Path } from './$types';

export function $<T, U>(defaults: T, path: Path, object: {}): T | U;
