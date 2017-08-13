import { Omit, Same } from './$operation';

export function $<T, U, V, W>(
  fn: (key: string, a: V, b: V) => W,
  left: T,
  right: U,
): Omit<T, keyof U> & Omit<U, keyof T> & Record<Same<keyof T, keyof U>, W>;
