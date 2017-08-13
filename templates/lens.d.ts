import { ManualLens } from './$types';

export function $<T, U>(
  getter: (target: U) => T,
  setter: (focus: T, target: U) => U,
): ManualLens<T, U>;
