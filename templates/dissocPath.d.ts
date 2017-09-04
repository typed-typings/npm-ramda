import { DeepPartial } from './$operation';
import { Path } from './$types';

export function $<T extends object>(path: Path, object: T): DeepPartial<T>;
