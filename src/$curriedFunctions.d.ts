export type CurriedFunction0<R> = () => R;
export interface CurriedFunction1<T1, R> {
    (v1: T1): R;
}
export interface CurriedFunction2<T1, T2, R> {
    (v1: T1): CurriedFunction1<T2, R>;
    <$SEL extends "1">(): (v1: T1) => CurriedFunction1<T2, R>;
    <$SEL extends "11">(): (v1: T1, v2: T2) => R;
    (v1: T1, v2: T2): R;
}
export interface CurriedFunction3<T1, T2, T3, R> {
    (v1: T1): CurriedFunction2<T2, T3, R>;
    (v1: T1, v2: T2): CurriedFunction1<T3, R>;
    <$SEL extends "1">(): (v1: T1) => CurriedFunction2<T2, T3, R>;
    <$SEL extends "11">(): (v1: T1, v2: T2) => CurriedFunction1<T3, R>;
    <$SEL extends "111">(): (v1: T1, v2: T2, v3: T3) => R;
    (v1: T1, v2: T2, v3: T3): R;
}
export interface CurriedFunction4<T1, T2, T3, T4, R> {
    (v1: T1): CurriedFunction3<T2, T3, T4, R>;
    (v1: T1, v2: T2): CurriedFunction2<T3, T4, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction1<T4, R>;
    <$SEL extends "1">(): (v1: T1) => CurriedFunction3<T2, T3, T4, R>;
    <$SEL extends "11">(): (v1: T1, v2: T2) => CurriedFunction2<T3, T4, R>;
    <$SEL extends "111">(): (v1: T1, v2: T2, v3: T3) => CurriedFunction1<T4, R>;
    <$SEL extends "1111">(): (v1: T1, v2: T2, v3: T3, v4: T4) => R;
    (v1: T1, v2: T2, v3: T3, v4: T4): R;
}
export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
    (v1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
    (v1: T1, v2: T2): CurriedFunction3<T3, T4, T5, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction2<T4, T5, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction1<T5, R>;
    <$SEL extends "1">(): (v1: T1) => CurriedFunction4<T2, T3, T4, T5, R>;
    <$SEL extends "11">(): (v1: T1, v2: T2) => CurriedFunction3<T3, T4, T5, R>;
    <$SEL extends "111">(): (v1: T1, v2: T2, v3: T3) => CurriedFunction2<T4, T5, R>;
    <$SEL extends "1111">(): (v1: T1, v2: T2, v3: T3, v4: T4) => CurriedFunction1<T5, R>;
    <$SEL extends "11111">(): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): R;
}
export interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
    (v1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
    (v1: T1, v2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction3<T4, T5, T6, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction2<T5, T6, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction1<T6, R>;
    <$SEL extends "1">(): (v1: T1) => CurriedFunction5<T2, T3, T4, T5, T6, R>;
    <$SEL extends "11">(): (v1: T1, v2: T2) => CurriedFunction4<T3, T4, T5, T6, R>;
    <$SEL extends "111">(): (v1: T1, v2: T2, v3: T3) => CurriedFunction3<T4, T5, T6, R>;
    <$SEL extends "1111">(): (v1: T1, v2: T2, v3: T3, v4: T4) => CurriedFunction2<T5, T6, R>;
    <$SEL extends "11111">(): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => CurriedFunction1<T6, R>;
    <$SEL extends "111111">(): (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): R;
}
