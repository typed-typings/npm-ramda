import { Morphism, PropKey } from "./$types";
export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
export type Evolver<T> = Morphism<T, T> | {
    [K in keyof T]?: Evolver<T[K]>;
};
export type Diff<T extends PropKey, U extends PropKey> = ({
    [P in T]: P;
} & {
    [P in U]: never;
} & {
    [x: string]: never;
})[T];
export type Omit<T, K extends PropKey> = Pick<T, Diff<keyof T, K>>;
export type Same<T extends PropKey, U extends PropKey> = Diff<T | U, Diff<T, U> | Diff<U, T>>;
export type Merge<T, U> = Omit<T, keyof U> & U;
export interface NumberStringMap {
    "0": "0";
    "1": "1";
    "2": "2";
    "3": "3";
    "4": "4";
    "5": "5";
}
export type NumberToString<T extends number> = T extends keyof NumberStringMap ? NumberStringMap[T] : never;
export type KeyOf<T, K = keyof T> = Extract<K, string> | NumberToString<Extract<K, number>>;
