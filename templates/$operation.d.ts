import { Morphism, PropKey } from './$types';

export type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };

// from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f8fb828/types/ramda/index.d.ts#L64
export type Evolver<T> = Morphism<T, T> | { [K in keyof T]?: Evolver<T[K]> };

// from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
export type Diff<T extends PropKey, U extends PropKey> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends PropKey> = Pick<T, Diff<keyof T, K>>;

export type Same<T extends PropKey, U extends PropKey> = Diff<
  T | U,
  Diff<T, U> | Diff<U, T>
>;
export type Merge<T, U> = Omit<T, keyof U> & U;

export interface NumberStringMap {
  0: '0';
  1: '1';
  2: '2';
  3: '3';
  4: '4';
  5: '5';
}

export type NumberToString<T extends number> = T extends keyof NumberStringMap
  ? NumberStringMap[T]
  : never;

// symbols are un-enumerable even if it's "enumerable"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#Detection_Table
export type KeyOf<T, K = keyof T> =
  | Extract<K, string>
  | NumberToString<Extract<K, number>>;
