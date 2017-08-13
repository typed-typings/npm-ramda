import { DeepPartial } from './$operation';
import { Path } from './$types';

export function $<T extends {}>(path: Path, object: T): DeepPartial<T>;
