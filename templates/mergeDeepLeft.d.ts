import { DeepMerge } from './$operation';

export function $<T extends object, U extends object>(
  left: T,
  right: U,
): DeepMerge<U, T>;
