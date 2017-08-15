export function $string(a: string, b: string): string;
export function $list<T, U>(a: T[], b: U[]): (T | U)[];
export function $mixed<T, U>(
  a: T[] | string,
  b: U[] | string,
): (T | U)[] | string;
