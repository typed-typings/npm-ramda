import { Morphism, PropKey } from "./$types";
export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
export type Evolver<T> = Morphism<T, T> | {
    [K in keyof T]?: Evolver<T[K]>;
};
export type Omit<T, K extends PropKey> = Pick<T, Exclude<keyof T, K>>;
export type Same<T extends PropKey, U extends PropKey> = Extract<T, U>;
export type Merge<T, U> = Omit<T, keyof U> & U;
export type DeepMerge<T, U> = {
    0: Omit<T, keyof U> & Omit<U, keyof T> & {
        [K in Same<keyof T, keyof U>]: DeepMerge<T[K], U[K]>;
    };
    1: U;
}[T extends object ? U extends object ? 0 : 1 : 1];
export interface NumberStringMap {
    0: "0";
    1: "1";
    2: "2";
    3: "3";
    4: "4";
    5: "5";
}
export type NumberToString<T extends number> = T extends keyof NumberStringMap ? NumberStringMap[T] : never;
export type KeyOf<T, K = keyof T> = Extract<K, string> | NumberToString<Extract<K, number>>;
