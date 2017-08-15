export function $<T, R>(fn: (seed: T) => [R, T] | false, initial: T): R[];
