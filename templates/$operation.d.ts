import { List, Morphism } from './$types';

export type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };

// from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f8fb828/types/ramda/index.d.ts#L64
export type Evolver<T> = Morphism<T, T> | { [K in keyof T]?: Evolver<T[K]> };

export type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>;

export type Same<T extends string, U extends string> = Exclude<
  T | U,
  Exclude<T, U> | Exclude<U, T>
>;
export type Merge<T, U> = Omit<T, keyof U> & U;

// from https://github.com/Microsoft/TypeScript/pull/21316#issuecomment-359274999
export type Flatten<T> = T extends List<any> ? Flatten6<T[number]> : T;
export type Flatten6<T> = T extends List<any> ? Flatten5<T[number]> : T;
export type Flatten5<T> = T extends List<any> ? Flatten4<T[number]> : T;
export type Flatten4<T> = T extends List<any> ? Flatten3<T[number]> : T;
export type Flatten3<T> = T extends List<any> ? Flatten2<T[number]> : T;
export type Flatten2<T> = T extends List<any> ? Flatten1<T[number]> : T;
export type Flatten1<T> = T extends List<any> ? T[number] : T;
