import { Dictionary, Predicate } from './$types';

export function $(
  spec: Dictionary<Predicate<any>>,
  object: Dictionary<any>,
): boolean;
